import React from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  const s: Record<string, React.CSSProperties> = {
    pageWrapper: {
      backgroundColor: '#fff',
      paddingBottom: '100px',
    },
    // OUR STORY STYLES
    storySection: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      color: '#1a1a1a',
      maxWidth: '760px',
      margin: '0 auto',
      padding: '64px 24px',
    },
    label: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '12px',
    },
    h1: {
      fontSize: '42px',
      fontWeight: 700,
      color: '#7B1E1E',
      margin: '0 0 48px',
      lineHeight: 1.2,
    },
    // FOUNDER & CEO COMMON STYLES
    bioSection: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      color: '#1a1a1a',
      maxWidth: '860px',
      margin: '0 auto',
      padding: '64px 24px 80px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#1a1a1a',
      margin: '0 0 48px',
      lineHeight: 1.3,
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '64px',
      alignItems: 'flex-start',
    },
    imageContainer: {
      width: '100%',
      position: 'relative',
      aspectRatio: '3/4',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      backgroundColor: '#f5eeee',
    },
    p: {
      fontSize: '17px',
      lineHeight: 1.85,
      color: '#2a2a2a',
      marginBottom: '28px',
    },
    standout: {
      fontSize: '17px',
      lineHeight: 1.85,
      color: '#2a2a2a',
      marginBottom: '28px',
      fontWeight: 600,
    },
    closing: {
      fontSize: '18px',
      lineHeight: 1.85,
      color: '#7B1E1E',
      marginBottom: '28px',
      fontStyle: 'italic' as const,
      fontWeight: 600,
    },
    signature: {
      fontSize: '15px',
      color: '#777',
      fontStyle: 'italic' as const,
      marginTop: '8px',
    },
    divider: {
      border: 'none',
      borderTop: '2px solid #f5eeee',
      maxWidth: '860px',
      margin: '0 auto',
    }
  };

  return (
    <main style={s.pageWrapper}>
      
      {/* 1. OUR STORY */}
      <div style={s.storySection}>
        <div style={s.label}>Our Story</div>
        <h1 style={s.h1}>How It All Began</h1>

        <p style={s.p}>I did not set out to start a foundation.</p>

        <p style={s.p}>
          I met Reuben on a platform that had been set up with the promise of helping people.
          It turned out to be something very different. The person running it spoke well and
          presented a compelling vision, but the cracks appeared quickly. Money raised for
          those in need was not reaching them. When someone passed away and funds were
          solicited, I was the only one who contributed. The owner did not put in a single
          thing. Funds donated so that people in Nigeria could buy recharge cards and join
          meetings were withheld, and who received support was decided along tribal lines.
          Concerns were raised, tensions grew, and one day a senior member confronted the
          owner directly and made clear that things could not continue. There was a
          confrontation. The platform shut down that day and everyone went their separate ways.
        </p>

        <p style={s.p}>
          It was a painful lesson. I had spent years simply looking for places where I could
          genuinly help, and this experience sent me back into my corner. The desire to give
          had not gone anywhere. The trust had taken a knock.
        </p>

        <p style={s.standout}>It was Reuben who came back.</p>

        <p style={s.p}>
          He reached out and suggested I start an NGO. My first response was honest: I was
          too busy, I did not have the time, and I had never run one before. Reuben said he
          would run it, if I would start it and support him. I looked at him and said
          something I meant completely: a good heart is not enough to run an organisation
          well. Neither of us had done this before. If we were going to do it, we were going
          to do it properly.
        </p>

        <p style={s.p}>
          So before a single beneficiary was helped, before any work began in the community,
          I paid for Reuben to attend formal NGO management training. He went, he learned,
          and he came back better prepared than either of us had been before. We got our
          documentation in order, our constitution in place, everything we needed to operate
          with integrity.
        </p>

        <p style={s.standout}>Then we began.</p>

        <p style={s.p}>
          Registration in Nigeria took almost a year. Red tape, delays, bureaucracy at every
          turn. We kept going. With limited funds and deep commitment we went into communities
          quietly, without announcing ourselves, identifying the people most in need. We would
          visit, bring food, sit with people, hear their stories, and begin the process of
          walking alongside them. Not handouts. A pathway. The same four stage model we still
          use today.
        </p>

        <p style={s.p}>
          Along the way we discovered something that many already knew but that hit differently
          when you are standing in front of it: in Nigeria, if you have no money, you will not
          be treated. Medical care is simply withheld. So we opened an account with a local
          private hospital and made an arrangement: anyone who comes from DIEF, treat them,
          and we will pick up the bill.
        </p>

        <p style={s.p}>
          A year after registering in Nigeria, we registered in Switzerland. Two countries,
          one mission.
        </p>

        <p style={s.p}>
          There were nights, more than a few, where Reuben and I worked through until morning,
          two nights in a row sometimes, going through cases we could not yet reach,
          brainstorming, trying to find a way. Three years of that. Hard years. Years that
          still continue.
        </p>

        <p style={s.p}>
          What kept us going then, and what keeps us going now, is simple. It came from
          the heart.
        </p>

        <p style={s.p}>
          DIEF has been entirely self-funded since the beginning. That is not something I
          apologise for. It is the clearest proof I have that I mean what I say.
        </p>

        <p style={s.p}>
          In 2025 I finally flew to Nigeria and met Reuben and his team in person for the
          very first time. Two years of building something real together, entirely remotely,
          across continents, and that was the moment we finally stood in the same room. I
          went out with the team to visit beneficiaries. I saw what we had built.
        </p>

        <p style={s.closing}>That is our story. It is still being written.</p>
      </div>

      <hr style={s.divider} />

      {/* 2. FOUNDER BIO */}
      <div style={s.bioSection}>
        <div style={s.label}>A word from our founder</div>
        <h2 style={s.h2}>Why I could not look away</h2>

        <div style={s.layout}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={s.p}>
              I did not set out to build a foundation. I set out to help one person.
              But when you go looking for one person in need, you find ten. And when
              you find ten, you cannot unsee the others standing behind them.
            </p>
            <p style={s.p}>
              I am a technology professional. I hold a CISSP certification and have
              spent over a decade working in Identity and Access Management and
              Governance, Risk and Compliance. That world operates on systems,
              controls and accountability. When I looked at how charitable work was
              being done around me, I saw the opposite. I saw platforms that took
              money and gave nothing back. I experienced that firsthand and I walked
              away angry.
            </p>
            <p style={s.p}>
              But I could not stay away. Because the problem was not charity. The
              problem was the absence of rigour. So before we helped a single person,
              I invested in formal NGO management training for our in-country CEO.
              Before we asked anyone else to believe in this work, I funded it myself
              for three years. I wanted to know the model worked before I asked
              anyone to trust it.
            </p>
            <p style={s.p}>
              It works. The grandmother who could not feed her grandchildren now runs
              her own business. The elderly man who lost his kneecap used emergency
              support to start trading coal. These are not stories of rescue. They
              are stories of people who knew exactly what they needed to do once
              someone trusted them with the means to do it.
            </p>
            <p style={s.closing}>
              That is what Direct Impact Empowerment Foundation exists to do. Not to
              save people. To walk with them until they no longer need us.
            </p>
            <p style={s.signature}>
              Olufemi Adeyemo, Founder, Direct Impact Empowerment Foundation
            </p>
          </div>

          <div style={s.imageContainer}>
            <Image 
              src="/pesin.png" 
              alt="Olufemi Adeyemo" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <hr style={s.divider} />

      {/* 3. CEO BIO */}
      <div style={s.bioSection}>
        <div style={s.label}>A word from our CEO</div>
        <h2 style={s.h2}>The man on the ground</h2>

        <div style={s.layout}>
          <div style={s.imageContainer}>
            <Image 
              src="/reuben.jpeg" 
              alt="Oga Reuben Eka" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={s.p}>
              When the platform we had both been part of fell apart and everyone went
              their separate ways, I approached Femi. I had noticed something about
              her during our time together. Of everyone in that group, she was a giver.
            </p>
            <p style={s.p}>
              I told her I believed we could do something real. Something that actually
              reached people who had been left behind. She listened. And then, before
              she agreed to help a single person, she sent me for training. Proper NGO
              management training. She wanted the foundation to be built correctly from
              the very first step.
            </p>
            <p style={s.p}>
              For two years we worked together without ever meeting in person. She was
              in Switzerland. I was here in Nigeria, going into communities, finding
              the people no system had found, reporting back, coordinating care. We
              built trust across continents before we ever shook hands.
            </p>
            <p style={s.p}>
              When she finally visited, I took her to meet the people we had been
              talking about for two years. She met the grandmother. She met the families.
              Everyone was so pleased to see her. The work has only pushed forward since then.
            </p>
            <p style={s.closing}>
              We are happy. We are proud. And we know that what we are doing is scalable.
              If we have achieved everything we have with no external funding, just imagine
              what becomes possible when support from the outside finally arrives.
            </p>
            <p style={s.signature}>
              Oga Reuben Eka, CEO, Direct Impact Empowerment Foundation, Nigeria
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}