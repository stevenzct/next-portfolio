"use client";

import { useEffect, useRef, useState } from "react";

const SPOTIFY_PLAYLIST_URI = "spotify:playlist:7fW1LdNJKkn2YOjRBu6AFa";

type PlaybackUpdateEvent = {
  data: {
    isPaused: boolean;
  };
};

type SpotifyEmbedController = {
  addListener: (
    event: "playback_update",
    callback: (event: PlaybackUpdateEvent) => void
  ) => void;
};

type SpotifyIframeApi = {
  createController: (
    element: HTMLElement,
    options: { height: string; uri: string; width: string },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIframeApi) => void;
    SpotifyIframeApi?: SpotifyIframeApi;
  }
}

export function SpotifyIsland() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const mountPlayer = (api: SpotifyIframeApi) => {
      if (!embedRef.current || embedRef.current.childElementCount > 0) {
        return;
      }

      api.createController(
        embedRef.current,
        {
          height: "96",
          uri: SPOTIFY_PLAYLIST_URI,
          width: "100%",
        },
        (controller) => {
          controller.addListener("playback_update", (event) => {
            if (isMounted) {
              setIsPlaying(!event.data.isPaused);
            }
          });
        }
      );
    };

    if (window.SpotifyIframeApi) {
      mountPlayer(window.SpotifyIframeApi);
    } else {
      window.onSpotifyIframeApiReady = (api) => {
        window.SpotifyIframeApi = api;
        mountPlayer(api);
      };

      if (!document.querySelector("[data-spotify-iframe-api]")) {
        const script = document.createElement("script");
        script.async = true;
        script.dataset.spotifyIframeApi = "true";
        script.src = "https://open.spotify.com/embed/iframe-api/v1";
        document.body.appendChild(script);
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-3 left-1/2 z-50 -translate-x-1/2 transition-[width] duration-500 md:bottom-5 ${
          isOpen
            ? "w-[min(calc(100vw-24px),300px)]"
            : "w-[64px] sm:w-[104px]"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocusCapture={() => setIsOpen(true)}
        onBlurCapture={(event) => {
          const nextFocus =
            event.relatedTarget instanceof Node ? event.relatedTarget : null;

          if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
            setIsOpen(false);
          }
        }}
      >
        <div
          className={`spotify-island overflow-hidden border border-white/15 bg-[#111111]/88 text-white shadow-[0_14px_36px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 ease-out ${
            isOpen
              ? "w-full rounded-[20px] p-1.5"
              : "w-full rounded-full px-2.5 py-1.5"
          }`}
        >
          <div
            className={`transition-all duration-500 ease-out ${
              isOpen
                ? "max-h-0 max-w-0 scale-95 opacity-0"
                : "max-h-8 max-w-28 scale-100 opacity-100"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="flex w-full items-center justify-center gap-2"
                aria-label="Open Spotify player"
              >
                <SpotifyLogo className="h-5 w-5" />
                <span className="hidden text-[11px] font-nm-book text-white/85 sm:inline">
                  Spotify
                </span>
                <WaveBars isPlaying={isPlaying} />
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-out ${
              isOpen
                ? "max-h-36 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between px-1.5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-full px-1.5 py-1 text-[11px] font-nm-book text-white/80 transition hover:bg-white/10 hover:text-white"
                    aria-label="Minimize Spotify player"
                  >
                    <SpotifyLogo className="h-[18px] w-[18px]" />
                    Spotify
                    <WaveBars isPlaying={isPlaying} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
                    aria-label="Minimize Spotify player"
                  >
                    x
                  </button>
                </div>
                <div
                  ref={embedRef}
                  className="spotify-embed-frame h-24 w-full overflow-hidden rounded-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .spotify-island {
          transform-origin: bottom center;
          animation: spotify-pop 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        .spotify-embed-frame iframe {
          border: 0;
          border-radius: 14px;
          height: 96px;
          width: 100%;
        }

        .spotify-wave span {
          width: 2px;
          border-radius: 999px;
          opacity: 0.85;
          transform: scaleY(0.35);
          transform-origin: bottom;
        }

        .spotify-wave.playing span {
          animation: spotify-wave 880ms ease-in-out infinite;
        }

        .spotify-wave span:nth-child(1) {
          height: 7px;
          background: #1db954;
          animation-delay: 0ms;
        }

        .spotify-wave span:nth-child(2) {
          height: 14px;
          background: #2de2e6;
          animation-delay: 100ms;
        }

        .spotify-wave span:nth-child(3) {
          height: 10px;
          background: #f72585;
          animation-delay: 200ms;
        }

        .spotify-wave span:nth-child(4) {
          height: 16px;
          background: #fee440;
          animation-delay: 300ms;
        }

        @keyframes spotify-wave {
          0%,
          100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1);
          }
        }

        @keyframes spotify-pop {
          from {
            transform: translateY(8px) scale(0.96);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

function SpotifyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path
        d="M6.7 9.1c3.5-1 7.4-.8 10.4.7"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M7.3 12c2.8-.8 6-.6 8.4.5"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.45"
      />
      <path
        d="M7.9 14.7c2.2-.6 4.5-.5 6.3.4"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function WaveBars({ isPlaying }: { isPlaying: boolean }) {
  return (
    <span
      className={`spotify-wave flex h-4 items-end gap-0.5 ${
        isPlaying ? "playing" : ""
      }`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}
