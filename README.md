# bubbles

I think, in no uncertain terms that decentralised social media is the future of online community and communication. The traditional server-client model brings about
an intrinsic conflict between content and moderator that cannot be resolved. It brings to the forefront not just "tribes of people" but a heiracrchy of who-is-who,
determined by their supposed influence. Influence created.. through often times mirrors of real-world heirarchy. Relationships abstracted away as connection points on a graph.
"Influencers" are a modern concept. A culture born from the internet.

The future is less.

Meaningful conversation. Deeper richer topics. Less of a publishing medium. More a way to understand and model real life connections. 

Niches.

Community is always about niches. Now more than ever, the concept of a follower becomes meaningless. What we want are connections. These overlap but are never the same thing.

I want to create a place a way to talk to my friends about interesting things and not get bored.

I don't want to be caught in the trap of competing for social status. 

I also want to meet new people, sometimes randomly. 

The point I think... is about connection. 

Finding some way to express some basic human truth to another person and hope the message isn't lost along the way. This I think is all that there is.

I want... I care about the people I know.

But I care about the people I don't know and want to know... could know. If I wanted.

A place that encouraged that. A kind of human place. I could get lost and curate the cutest, silliest, most authentic creations.

By people I cared about. That sounds nice. 

Every social media I know of misses the point. I don't want to be forced into a private conversation without having what to say. Social anxiety exists both ways.

People have lots of things to say to each other I think.

Alot of people struggle with expressing themselves, I don't to be broadcasted to. I want to be talked to. I want.. to engage in meaningful discourse.

Forums miss the point to. There it's about information. It's not. It's about people and the things we say to each other in our little niches.

# The Value Proposition

I just drank slightly too much coffee. I might have lost my mind, but the value proposition of bubbles came to me all at once, shitting in the bathroom. It was inspired by a 
simple problem, what do you have? All of you my peers? Why should I toil and create the infrastructure for a decentralised, private and secure social media? I understand distribution. The client-server model has at its core, a proposition. Come to me, come to my platform -- I'll sell what you give me. Private data. Or worse, I rely on the good will of human nature and belief in what decentralisation of social media could be. Then it struck me.

You all have something. Something I deeply deeply cherish. Something extremely valuable to me, that has very little value to you. Computational Power.

Give me some of your computational power, and I'll give you-- in no uncertain terms, a guarantee. Of mutual benefit. Your best interest? Is my best interest.
Something has always been missing. An imperfection in this idea. I have a minimum viable product that can scale horizontally with the human population, but first?
The students of Federal University of Technology, Minna. My little experiment.

# The Architecture(Some Centralisation is a necessary evil)
## (Work in progress)
Every bundle of this app, will cary with it both a client(A react-native app) and a server(unsure of how the runtime is to evaluate). 
The UI is loaded on the client -- Distributed through whatever channels (app stores, private chat etc) and communicates with a centralised service running somewhere.

## Responsibilites
- The client is the client -- It's what users(students care about)
- The bundled server is responsible for almost everything a traditional server would do. It finds other peers and read/write(s) data(stored locally of course! and encrypted) fetched from other peers... and of course crunches the data that keeps the lights on, and caffeine running through my veins.
- The central server is primarily two things. It finds peers in the network that are too far away, it recieves the crunched data payment.

## Obvious Problems I don't know how to solve (The things I know I don't know)
- Security.
- Integrity, how do I know the data got crunched?
- Encryption, how does message passing work here?
- How any of this translates to actual fucking code.

## Now what?
That is big picture. Now I need something-- better than a Minimum Viable Product. I need a working proof of concept if I'm to convince anyone to spend development time on this.

# Proof of Concept
* Client, ugly, but functional basic messaging app. Nothing special.
* Peer to Peer Messaging. (One client/server can message another client/server-- over TCP socket and can open and recieve a http request independent of central)
* Client/servers can send messages to central server.
* Central can co-ordinate and partition tasks to be done by each client/server. It doesn't matter what. It sends a computation, it receives one. Some encrypted text.
