/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "./imports-components";

export default function HomeProjects({
  title,
  brief,
  skills,
  isLive,
  liveUrl,
  codeUrl,
  ...props
}) {
  return (
    <div className="shadow-xl hover:shadow-2xl p-2 border-2 round-xl" {...props}>
      <h1 className="project-title text-2xl">{title}</h1>
      <img />
      <div className="project-brief">
        <p>{brief}</p>
        {skills.map((skill) => (
          <Button key={skill} className="rounded-3xl px-2 py-0 bg-orange-200">
            {skill}
          </Button>
        ))}
      </div>
      <div className="live-code mt-1">
        {isLive && (
          <a href={liveUrl} rel="noopener noreffer" target="_blank">
            <Button className="rounded-3xl py-1 bg-red-400">Live</Button>
          </a>
        )}

        <a href={codeUrl} rel="noopener noreffer" target="_blank">
          <Button className="rounded-3xl py-1 bg-green-400">Code</Button>
        </a>
      </div>
    </div>
  );
}
