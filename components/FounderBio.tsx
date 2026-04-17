import Image from 'next/image';

export default function FounderBio() {
  const s: Record<string, React.CSSProperties> = {
    page: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      color: '#1a1a1a',
      maxWidth: '860px',
      margin: '0 auto',
      padding: '64px 24px 80px',
    },
    label: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#7B1E1E',
      marginBottom: '12px',
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
      gridTemplateColumns: '1fr 2fr',
      gap: '64px',
      alignItems: 'flex-start',
    },
    photoPlaceholder: {
	  position: 'relative',
	  overflow: 'hidden',
      width: '100%',
      aspectRatio: '3/4',
      background: '#f5eeee',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    placeholderText: {
      fontSize: '13px',
      color: '#a07070',
      fontStyle: 'italic' as const,
      textAlign: 'center' as const,
      padding: '0 12px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0px',
    },
    p: {
      fontSize: '17px',
      lineHeight: 1.85,
      color: '#2a2a2a',
      marginBottom: '24px',
    },
    standout: {
      fontSize: '17px',
      lineHeight: 1.85,
      color: '#2a2a2a',
      marginBottom: '24px',
      fontWeight: 600,
    },
    closing: {
      fontSize: '17px',
      lineHeight: 1.85,
      color: '#7B1E1E',
      marginBottom: '24px',
      fontWeight: 600,
    },
    signature: {
      fontSize: '15px',
      color: '#777',
      fontStyle: 'italic' as const,
      marginTop: '8px',
    },
  };

  return (
    <div style={s.page}>
      <div style={s.label}>A word from our founder</div>
      <h2 style={s.h2}>Why I do this</h2>

      <div style={s.layout}>
        <div style={s.photoPlaceholder}>
         <Image
			src="/pesin.png"
			alt="team-img"
            fill
			className="object-cover"
		  />
        </div>

        <div style={s.content}>
          <p style={s.p}>
            I finally said yes to Reuben because he told me he would do the work himself.
            All I needed to do was support him. I knew I did not have the time to be
            hands-on, so when he said that, I thought that is a good deal. I would send
            him for proper NGO management training so he would know what it truly means
            to run an organisation, and he would take it from there. That was the thing
            that tipped me over. I genuinely believed I would not need to roll up my sleeves.
          </p>

          <p style={s.standout}>
            What I did not know was that it was a set-up. One that even Reuben was not
            aware of.
          </p>

          <p style={s.p}>
            This work means more to me than I can easily put into words. I have cried
            over this. I have cried because there were not enough funds to take care of
            people who desperately needed it. I have cried over cases that stayed with
            me. I have cried for people who were suffering and I could not reach them
            fast enough. I have prayed over it. I have lost sleep over it. Because my
            heart is completely in this.
          </p>

          <p style={s.p}>
            But I want to be clear about something. This also makes me very, very happy.
            Doing this makes me happy in a way that nothing else does. I could do this
            full time without being paid a single penny, just to see someone's life
            change because I did not walk away.
          </p>

          <p style={s.p}>
            That is why our team is deliberately small. I have my finger on everything
            that happens in Direct Impact. The people we serve are not statistics. They
            are human beings and they are treated that way, with dignity and with respect,
            every single time.
          </p>

          <p style={s.p}>
            I cannot be a doctor. I cannot watch people suffer without crumbling inside.
            But this gives me another way to help. And the reason I do it is very simple.
            If that were me, would I not want someone to show up?
          </p>

          <p style={s.p}>
            There have been times when I did not have much myself, and I still gave what
            I had. Not because it would solve my own problems, but because holding on to
            something that cannot help me, when it could change everything for someone
            else, makes no sense to me. Release it. Let it do what it can do somewhere
            it is needed.
          </p>

          <p style={s.closing}>
            To be kind, all you need to do is mentally swap places. Just mentally swap places.
          </p>

          <p style={s.signature}>
            Femi, Founder, Direct Impact Empowerment Foundation
          </p>
        </div>
      </div>
    </div>
  );
}
