import InfoRow from "./InfoRow";

function Info() {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="font-poppins text-5xl font-bold">FAQs</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2 py-4">
        <div className="flex flex-col space-y-3">
          <InfoRow
            question="How it Works"
            answer='All users, follows, statuses, and comments will be minted to
            the blockchain for you automatically. A Polkadot address
            will be created for you when you join. We are implementing a
            way for you to get access to that wallet, connect your own
            or transfer your assets. On PostThread you get rewarded for
            the value you bring. We have designed a reward system based
            of your level and your social score. You can level up by
            interacting with the site through statuses and comments.
            Your social score improves as you gain followers. Every
            night your level and social score will be recalculated and a
            daily airdrop will be available for you to collect. These
            "Thread" tokens are currently just values on the
            site, but once we launch our token, each existing beta user
            will be generously rewarded for helping us in our humble
            beginnings.'
          />
          <InfoRow
            question="Inspiration"
            answer="Social media is not in our best interest. We are the product
            and the service. Users create most of the content on these
            sites and are not rewarded appropriately. We also do not
            know how these algorithms work. Their loyalties lie with
            advertisers not with users and these misalign incentives led
            to the polarizing climate we live in. They want to keep you
            on the site as long as possible at any cost and have learned
            that playing with your emotions is the best way to do that.
            Blockchain technology has made it so we no longer have to
            live in this social media dystopia. The blockchain can be
            thought of as an open decentralized database, where users
            can have control and ownership of their data. We believe
            this will not only allow content creators to be paid more
            effectively and efficiently, but will open up a world of
            possibilities where you can actually chose the type of
            social media experience you want. You will have a say in
            what they do with your data and have control over how the
            media is presented to you. I consider the current state of
            social media to be a national emergency. The population is
            growing more polarized, angry and divisive everyday and it
            think it directly attributable to social media. We live in a
            new world of big data, which we haven't quite figured
            out how to navigate yet. Therefore, it opens up an
            opportunity for these large corporations to take advantage
            of us. Decentralization allows the people to take control
            back from the corporations and I think we have created the
            beginning of an application that can do just that."
          />
        </div>
        <div className="flex flex-col space-y-3">
          <InfoRow
            question="Project Liberty (the Frequency Parachain)"
            answer="The developers at
              Project Liberty
            deployed their Frequency parachain on Polkadot in December
            2022. We have been working with the developers and are
            currently minting to their Rococo testnet. We plan to be one
            of the first contributors to their mainnet as soon as they
            are ready. Their goal is to create a protocol layer that is
            free from corporate control and gives power back to the
            user. We think having a protocol layer is key to a
            prospering decentralized social media because any value
            PostThread creates can be captured by any other application
            that comes after and vice versa. This adds competition and
            collaboration, which are always most beneficial to the
            consumer and user. We think this will promote open-source
            projects with users themselves contributing to the site. The
            best way to beat the billion dollar social media empire is
            to lean into the open, free and sharing economy of our
            users."
          />
          <InfoRow
            question="How PostThread was made"
            answer="Speaking of collaboration, we would like to explain how we built this so anyone can come along and make their own social media site if they would like.
            First off, we used the digital ocean one-click Mastodon deployment to start our Mastodon server. Then we edited some of the react and ruby code to add some features, such as the crypto tab in your user profile. You can keep up with our parachain backend development at our GitHub repo."
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
