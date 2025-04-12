import InterviewPrep from "@/components/iterview";
import Resume from "@/components/ui/resume";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import dayjs from "dayjs";

import React from "react";
import BadgeCheck from "@/public/bade.svg";
import Image from "next/image";

const page = async ({ params }: RouteParams) => {
  const user = await getCurrentUser();
  const { id } = await params;
  const interview = await getInterviewById(id);
  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl">
      <Resume name={user?.name || ""} email={user?.email || ""} />
      <section className="space-y-8">
        {/* Header */}
        <div className="text-center mt-2.5">
          <h1 className="text-4xl font-bold text-gray-800">
            Position for{" "}
            <span className="capitalize text-indigo-600">
              {interview?.role}
            </span>
          </h1>
        </div>

        {/* Final Assessment */}
        <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 font-medium">
            {feedback?.finalAssessment}
          </p>
        </div>

        {/* Interview Breakdown */}
        <div className="space-y-4">
          <div className="space-y-4">
            {feedback?.categoryScores?.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
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
          </div>
        </div>

        {/* Strengths */}
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
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
      </section>
    </div>
  );
};

export default page;
