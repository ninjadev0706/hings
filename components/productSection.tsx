import ProductItem from "./ProductItem";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import useTranslation from "next-translate/useTranslation";

const productlist = [
  {
    id: 1,
    name: "0% interest Loans",
    image: "/images/product-item-images/1.png",
    description:
      "Hinges offers hyper-optimized cross-chain yeild farms designs to make compounding...",
    content:
      "Do you need funds but don't want to sell your crypto and miss out? Hinges also offers P2P community-based lending! Borrow USD, GBP, CHF, and EUR against your BTC, ETH, and other significant crypto holdings*, and benefit from 0% APR**, with no credit checks necessary! We believe in providing funding opportunities when conventional lenders won't. And, while we don't insist you hold any HPS to take advantage, it will bump up your priority status! *TBD according to market fluctuations. **Yes, you read that correctly, 0% APR!",
  },
  {
    id: 2,
    name: "Peer-to-Peer OTC Exchange",
    image: "/images/product-item-images/2.png",
    description:
      "On Hinges p2p exchange,frictionless local peer-to-peer trading...",
    content:
      "On Hinges p2p exchange, frictionless local peer-to-peer trading allows users to trade with each other — not with us.People buy and sell crypto on their terms, using Stablecoins, Local currencies, or Bank transfers in real-time.  The simple, safe way to buy and sell your Cryptocurrency Hinges OTC will allow buying and selling large amounts of Cryptocurrency directly through our Client Services team with the Best OTC trade execution and deep liquidity access through algorithmic intelligent order routing technology. Providing a private, more personalized service to institutions, home offices, and high net-worth individuals needing to fill large orders that might be too disruptive if placed on open markets at the exchanges in a discreet, secure and ultra-competitive manner.",
  },

  {
    id: 3,
    name: "Fractional / Co-own Real Estate",
    image: "/images/product-item-images/3.png",
    description:
      "Hold HINGES - Get VIP access - profit. It's that easy! FREE and EXCLUSIVE entry to the inner circle..",
    content:
      "Gamification offers new users a fun and easy entry to the world of Defi with streamlined access to liquidity pools and exclusive digital collectibles. Digital assets obtained in the Hinges ecosystem are like any other physical asset. They are on-chain, meaning they're tradable via third-party platforms and entirely under your control at all times. Working with top-tier partners in the gaming and NFT collectible industries, Hinges are creating the next generation blockchain Defi-inspired and crypto collectible incentivized strategy game. Battle, breed, trade, and upgrade in-game characters. A limited supply of destructible in-game assets! Items destroyed in battle become rarer (and more valuable!?).Progress through battle, stake, and farm your characters and items to earn rewards, including rare NFT items.",
  },
  {
    id: 4,
    name: "Metaverse NFT Game",
    image: "/images/product-item-images/4.png",
    description:
      "The MetaVerse offers new users and easy entry  to the world of Defi...",
    content:
      "Gamification offers new users a fun and easy entry to the world of Defi with streamlined access to liquidity pools and exclusive digital collectibles. Digital assets obtained in the Hinges ecosystem are like any other physical asset. They are on-chain, meaning they're tradable via third-party platforms and entirely under your control at all times. Working with top-tier partners in the gaming and NFT collectible industries, Hinges are creating the next generation blockchain Defi-inspired and crypto collectible incentivized strategy game. Battle, breed, trade, and upgrade in-game characters. A limited supply of destructible in-game assets! Items destroyed in battle become rarer (and more valuable!?).Progress through battle, stake, and farm your characters and items to earn rewards, including rare NFT items.",
  },
  {
    id: 5,
    name: "Crypto Assets Investment Fund Early stage Incubtor",
    image: "/images/product-item-images/5.png",
    description:
      "Hinges Ventures is commited a global accelerator and investor building the native...",
    content:
      "Hinges Ventures is committed to becoming a global accelerator and investor building the native Web 3.0 blockchain economy. Working alongside leading founders, exciting start-ups, and corporate innovators, we move new concepts efficiently to the market. Partners benefit and flourish through co-creation, capital, and a community invested in their success. The community benefits from early access and onboarding with projects at the intersection of emerging technologies and societal trends. Together, we bring innovative ideas to life. Catalyzing the growth of blockchain start-ups and actively working as a long-term strategic partner, we are coin-agnostic, token-model-agnostic, and Blockchain-agnostic. Pragmaticism over dogmatism. Execution over ideology and collaboration over competition.",
  },
  {
    id: 6,
    name: "Inner Circle Altcoins Trading",
    image: "/images/product-item-images/6.png",
    description:
      "Hold HINGES - Get VIP access - profit. It is that easy! FREE and EXCLUSIVE entry to the inner circle...",
    content:
      "Hold HINGES - Get VIP access - Profit.It's that easy! FREE and EXCLUSIVE entry to the Inner Circle - our elite group of traders, technical analysts, influencers, and investors.Get unique insights into the markets and learn how to grow your portfolio alongside the best! Coin reports, trade alerts, risk management advice, entries, and exits! Get all this and more, join the Hinges Inner Circle today!",
  },
];

export default function ProductsSection() {
  const { t } = useTranslation("common");

  return (
    <section className="section-2">
      <div className="main_container mx-auto sm:px-2 px-6 pb-14">
        <div className="our_features_container">
          <Fade direction="up" triggerOnce={true}>
            <h2 className="text-[#ffffff] sm:text-[45px] text-[28px] text-center font-['quicksand-bold'] m-[10px] font-bold">
              {t("product_suite")}
            </h2>
          </Fade>

          <div className="card_container w-full grid grid-cols-1 justify-center md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
            {productlist.map((productitem, index) => {
              return (
                <div className="mt-[20px] md:my-[10px]" key={productitem.id}>
                  <ProductItem productitem={productitem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
