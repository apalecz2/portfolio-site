import React from "react"

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBwSufjqoLghwgGIQ9uxkh19Gf0P-3gh9edgErRIw7_-9-0slesZd2pMsqFFGZufUMwbTniZbroZkDO8pZzo5othOsjY1NMXbvE0k5qtktAi5OfaR4uiKShJsSXN7v1uSOnp4qvKBYzdPRJa5wWEwMT4cW11UfFilDsSftAcpQAi_j0LjHTtCc1o-VIPY7UEah83as_wr1dhUDkM7mJbEQjKln6cc8BRaitj1owhcXgqrZ8gDESTivtbM59hIajPC7G0ModLH7l9TLC)"
              }}
            />
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-[var(--color-text)] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Aiden Paleczny
                </h1>
                <h2 className="text-[var(--color-text)] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Software Engineer
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


