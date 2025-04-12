import InterviewPrep from "@/components/iterview";
import Resume from "@/components/ui/resume";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import Donwload from "@/public/donwload.svg";

import React from "react";
import BadgeCheck from "@/public/bade.svg";
import Ex from "@/public/ex.svg";

import Image from "next/image";
import Tech from "@/public/tec.svg";
import { Button } from "@/components/ui/button";
import Linked from "@/public/Link.svg";
import ClientButtons from "@/components/linked";

const page = async ({ params }: RouteParams) => {
  const user = await getCurrentUser();

  const { id } = await params;
  const interview = await getInterviewById(id);
  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <>
      <div className="px-6 py-10 max-w-4xl photoclick mx-auto bg-white shadow-2xl rounded-2xl">
        <div className="text-center mt-2.5"></div>

        <Resume
          name={user?.name || ""}
          email={user?.email || ""}
          iterview={interview?.role}
        />

        <section className="space-y-8">
          {/* Header */}

          {/* Final Assessment */}

          {/* Interview Breakdown */}
          <div className="space-y-4">
            {/* <div className="space-y-4">
            {feedback?.categoryScores?.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 "
              >
                <p className="text-lg font-semibold text-gray-800">
                  {index + 1}. {category.name}{" "}
                  <span className="text-indigo-600">
                    ({category.score}/100)
                  </span>
                </p>
                <p className="text-gray-600 mt-1">{category.comment}</p>
              </div>
            ))}
          </div> */}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-pink-700 flex items-center gap-2">
              <Image
                src={Tech}
                alt="hello"
                width={20}
                height={20}
                className="w-5 h-5"
              />{" "}
              TechStack
            </h3>
            <span className="capitalize text-indigo-600">
              {interview?.techstack} {""}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-blue-500 flex items-center gap-2">
              <Image
                src={Ex}
                alt="hello"
                width={20}
                height={20}
                className="w-5 h-5"
              />{" "}
              Experience
            </h3>
            <span className="capitalize text-indigo-600">
              {interview?.level} {""}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              <Image
                src={BadgeCheck}
                alt="hello"
                width={20}
                height={20}
                className="w-5 h-5"
              />{" "}
              Strengths
            </h3>
            <ul className="list-disc list-inside text-black">
              {feedback?.strengths?.map((strength, index) => (
                <li key={index} className="text-black">
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths */}

          {/* Areas for Improvement */}
        </section>
      </div>
      <div className="flex justify-center items-center  mt-6">
        <ClientButtons role={interview?.role || ""} />
      </div>
    </>
  );
};

export default page;
