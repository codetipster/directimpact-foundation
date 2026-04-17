import  CEOBio  from '@/components/CEOBio'
import  FounderBio  from '@/components/FounderBio'

export default function OurStory() {
  const s: Record<string, React.CSSProperties> = {
    page: {
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
  };

  return (
    <div style={s.page}>
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
        genuinely help, and this experience sent me back into my corner. The desire to give
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
	  <FounderBio />
	  <CEOBio />
    </div>
	
  );
}
