"use client";
import React, { useState } from "react";
import { Button } from "./button";

interface ResumeProps {
  name: string;
  email: string;
  interview: string;
}

interface Education {
  id: number;
  degree: string;
  university: string;
  date: string;
}

export default function Resume({ name, email, iterview }: ResumeProps) {
  const [userEducation, setUserEducation] = useState<Education[]>([]);

  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [date, setDate] = useState("");
  const [showEdit, setEdit] = useState(true);
  const handelClick = () => {
    setEdit(false);
  };

  const handleAddEducation = () => {
    if (!degree || !university || !date) return;

    const newEducation: Education = {
      id: Date.now(),
      degree,
      university,
      date,
    };

    setUserEducation([...userEducation, newEducation]);
    setDegree("");
    setUniversity("");
    setDate("");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-3xl  space-y-10">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight capitalize">{name}</h1>
        <p className="text-sm text-gray-600">Email: {email}</p>
        <div className="flex justify-center gap-4 text-blue-600 underline text-sm font-medium">
          <a href="https://rushi07.github.io/" target="_blank">
            LinkedIn
          </a>
          <a href="https://rushi07.github.io/" target="_blank">
            Portfolio
          </a>
        </div>
      </header>
      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold pb-2 border-b mb-6">
          Career Objective
        </h2>
        <p className="text-black">
          I am {name}, a passionate and results-driven {iterview} professional
          seeking to contribute my skills in software development,
          problem-solving, and innovation to a forward-thinking tech company. My
          goal is to work on cutting-edge technologies, build scalable
          solutions, and continuously grow both technically and professionally
          within a collaborative and dynamic engineering team.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold pb-2 border-b mb-6">Education</h2>

        {/* Input Form */}

        {showEdit === true ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="e.g., B.Sc Computer Science"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  University
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="e.g., Stanford University"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Graduation Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <Button
              className="mt-2 mr-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              onClick={handleAddEducation}
            >
              + Add Education
            </Button>
            <Button
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              onClick={handelClick}
            >
              Done Edit
            </Button>
          </>
        ) : (
          ""
        )}

        {/* Education Cards */}
        <div className="grid gap-4 mt-6">
          {userEducation.map((edu) => (
            <div
              key={edu.id}
              className="border bg-gray-50 hover:bg-gray-100 transition-all p-4 rounded-xl shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-base font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.university}</p>
              </div>
              <p className="text-sm text-gray-500">{edu.date}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold pb-2 border-b mb-6">
          Skills Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-gray-800">
          <div>
            <strong>Languages:</strong> Python, Java
          </div>
          <div>
            <strong>Databases/OS:</strong> MySQL, PostgreSQL, Linux, Windows,
            MacOS
          </div>
          <div>
            <strong>Machine Learning:</strong> Supervised, Unsupervised, NLP,
            Computer Vision
          </div>
          <div>
            <strong>Libraries:</strong> Pandas, Numpy, Matplotlib, Scikit-learn,
            Pytorch, Tensorflow
          </div>
          <div>
            <strong>Frameworks/Tools:</strong> Power BI, Tableau, Flask, Hadoop,
            Git, Google Colab
          </div>
          <div>
            <strong>Soft Skills:</strong> Critical Thinking, Communication,
            Problem-Solving
          </div>
        </div>
      </section>
        
    </div>
  );
}
