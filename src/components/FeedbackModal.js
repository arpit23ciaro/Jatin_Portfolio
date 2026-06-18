import { IoCloseSharp } from "react-icons/io5";

export default function FeedbackModal({ open, onClose }) {
  if (!open) return null;

  const feedbacks = [
    "I wanted to get a feel for CISSP, and this course did exactly that.",
    "More great feedback from our security engineer. Really liked the class. Good engagement and lots of questions from the class, especially the OS team. The instructor had amazing energy and professionalism.",
    "I thought the security teacher did a good job today. He tried really hard to fit a lot of content in and even promised to provide videos for a few things.",
    "We finally got a really good course; thank you for putting it together.",
    "CISSP exercises were good.",
    "It was a damn good training already and I am still here although it’s 1 pm.",
    "Can’t think of anything better.",
    "All perfectly good difficult subject to teach.",
    "The training met my objectives and there’s nothing better I could have asked for.",
    "A vast amount of topics were covered efficiently in a short span of time. We likely will request the same class for a different group of folks.",
    "I really liked how the instructor explained every concept with real-world technical references. It was very informative for all of us.",
    "Relating with real-life examples and interacting with us a lot in class was a very good part of this training.",
    "The content was explained in detail with lots of real-time examples which made it interesting to learn and understand.",
    "I appreciated the clarity and organization of the in-class content. There were opportunities for discussion and questions, which helped deepen my understanding.",
    "I liked the interactive way of teaching of the instructor.",
    "The instructor is really nice and cooperative.",
    "The session was informative and well-structured, covering key cybersecurity threats and best practices effectively.",
    "The cybersecurity class was informative and engaging. Hands-on activities helped reinforce what we learned.",
    "The workshop was very interesting. The hands-on experience opened a new world for me and provided strong industry perspective.",
    "Trainer was excellent. Our software group is hard to please, and he did a great job presenting material efficiently.",
    "The instructor provided relevant content at the required expertise level and creatively included lab activities.",
    "The examples and scenarios were very descriptive and on point.",
    "Session was very interactive with effective lab sessions.",
    "I will use these learnings in future projects to build secure applications.",
    "The instructor explained concepts in depth and kept the sessions interactive.",
    "The presentations were nice and the instructor taught very well.",
    "Very organized and precise content related to the domain we are working on.",
    "The learning included both theory and practical, which helped in applying the logic.",
    "The instructor knew exactly how to make discussions interactive and engaging.",
    "The content was detailed and well-ordered, focusing on basics before advanced topics.",
    "The instructor explained everything with specific examples, making it easy to understand.",
    "The instructor was very friendly and explained everything clearly.",
    "It was an engaging and beautifully conducted session.",
    "The session was informative and in-depth. Examples helped understand complex topics.",
    "It was a well-planned session and helped me explore cybersecurity in depth.",
    "An insightful cybersecurity workshop with hands-on activities, including virtual machines and Kali Linux.",
    "The workshop was highly informative with expert instructors and practical activities. Overall, a valuable learning experience.",
    "The instructor kept engagement high, was very knowledgeable, and pacing was great.",
    "He was engaged and animated, you could tell he knew the material and was excited to share his knowledge.",
    "Jatin is super clear, and I like the way he organized and the flow of his content.",
    "The instructor was enthusiastic, well prepared, had interactive exercises, and engagedparticipants :) I learnt a lot!",
    "He explains the concept with enthusiasm and makes the session comfortable and easy tofollow for everyone.",
    "Jatin delivered an outstanding session on Threat Modeling that was both insightful and highlyengaging. His ability to break down complex security concepts into clear, actionable stepsmade the topic very approachable for everyone in the room.The real-world examples and practical demonstrations he used brought the subject to life, making it easy to understand howthreat modeling applies to our day-to-day work. His depth of knowledge, combined with hisenthusiasm for the subject, kept the audience engaged throughout.",
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Training Feedbacks</h3>
          <IoCloseSharp className="close-icon" onClick={onClose} />
        </div>

        <div className="modal-content">
          <ul>
            {feedbacks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
