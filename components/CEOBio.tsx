import Image from 'next/image';

export default function CEOBio() {
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
      gridTemplateColumns: '2fr 1fr',
      gap: '64px',
      alignItems: 'flex-start',
    },
    content: {
      display: 'flex',
      flexDirection: 'column' as const,
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
      <div style={s.label}>A word from our CEO</div>
      <h2 style={s.h2}>The man on the ground</h2>

      <div style={s.layout}>
        <div style={s.content}>
          <p style={s.p}>
            When the platform we had both been part of fell apart and everyone went their
            separate ways, I approached Femi. I had noticed something about her during our
            time together. Of everyone in that group, she was a giver. The same as me.
            The difference was that I was based in Nigeria and did not have much. But she
            was the logical person to ask.
          </p>

          <p style={s.p}>
            She said no at first. She told me she would rather support someone who was
            already running an NGO than start something new. I told her not to worry,
            that I would do it, that I would handle it. And I meant that. What I did not
            know at the time was how much work was actually involved. I thought it was
            something I could just start doing.
          </p>

          <p style={s.p}>
            So when she said she was going to send me for training, I was genuinely
            surprised. But that training opened my eyes. I realised that what we had been
            doing before was not NGO work. We were just doing something. What exactly,
            I am still not sure. But it was not this.
          </p>

          <p style={s.p}>
            The journey has been long. It has been tiring. But I have stayed committed,
            and with Femi's support, we have taken giant strides.
          </p>

          <p style={s.p}>
            One of the things that makes me most proud is that through Direct Impact, I
            have become even more respected in my community. People look up to me. People
            come to me with their problems and ask whether our organisation can help. And
            they do not know, they genuinely do not know, that this is an organisation of
            just two people. We work with such excellence that people assume we are big.
            We go out well dressed. We treat people with respect. We operate cleanly and
            professionally. And so they think we are a large organisation.
          </p>

          <p style={s.standout}>That still makes me smile.</p>

          <p style={s.p}>
            Femi had always wanted to stay in the background. But the work was too much
            for one person, and she had to step forward. From the very beginning she told
            me that I would be the CEO, that I would run things. And I am. I carry that
            title with so much pride.
          </p>

          <p style={s.p}>
            Seeing her come to Nigeria to see the work on the ground gave me enormous
            encouragement. Everyone was so pleased to see her. The work has only pushed
            forward since then.
          </p>

          <p style={s.closing}>
            We are happy. We are proud. And we know that what we are doing is scalable.
            If we have achieved everything we have with no external funding, just imagine
            what becomes possible when support from the outside finally arrives.
          </p>

          <p style={s.signature}>
            Reuben Eka, CEO, Direct Impact Empowerment Foundation, Nigeria
          </p>
        </div>

        <div style={s.photoPlaceholder}> 
          <Image
			src="/reuben.jpeg"
			alt="team-img"
            fill
			className="object-cover"
		  />
        </div>
      </div>
    </div>
  );
}
