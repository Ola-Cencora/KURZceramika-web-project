import { useEffect, useState } from "react";
import AboutTextMore from "./about_more.txt";

const AboutSubpage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(AboutTextMore)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error fetching about text:", error));
  }, []);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default AboutSubpage;
