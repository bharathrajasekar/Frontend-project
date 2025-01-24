"use client"; // Add this line at the top

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// The rest of your code

export default function SkillTestDashboard() {
  const [score, setScore] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempValues, setTempValues] = useState({
    rank: score.rank,
    percentile: score.percentile,
    correctAnswers: score.correctAnswers,
  });

  const analysis = {
    htmlTools: 80,
    tagsReferences: 60,
    tablesReferences: 24,
    cssBasics: 96,
  };

  const lineData = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        label: "Percentile",
        data: [0, 30, 50, 75, score.percentile],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const handleUpdate = () => {
    setScore({
      rank: parseInt(tempValues.rank),
      percentile: parseInt(tempValues.percentile),
      correctAnswers: parseInt(tempValues.correctAnswers),
    });
    setIsModalOpen(false); // Close modal after updating
  };

  const handleCancel = () => {
    setTempValues({
      rank: score.rank,
      percentile: score.percentile,
      correctAnswers: score.correctAnswers,
    });
    setIsModalOpen(false); // Close modal without updating
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-full md:w-48 bg-white shadow-md p-4 md:fixed md:h-full">
  <h1 className="text-xl font-bold text-black mb-6">Dashboard</h1>
  <nav className="space-y-4">
    <a href="#" className="block text-blue-600 font-medium">
      Skill Test
    </a>
    <a href="#" className="block text-gray-700">
      Profile
    </a>
    <a href="#" className="block text-gray-700">
      Settings
    </a>
    <a href="#" className="block text-gray-700">
      Logout
    </a>
  </nav>
</aside>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row p-6 ml-0 md:ml-64">
        {/* Second Column (Main Content) */}
        <div className="w-full md:w-1/0 bg-white shadow p-4 rounded-lg mb-4">
         {/* Card */}
<div className="bg-white shadow rounded-lg p-4 mb-4 flex items-center justify-between">
  <div className="">
    <img
      src="https://media-hosting.imagekit.io//ca9a3ddd20494b31/htmlicon.png?Expires=1832343815&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RUap~8xNMp2UzZ74kEM044LpdB8RDNa9vQOCyUa1C8NPCMyBABmvdsd3PbIO-GmJEZ8aouJM0LgH530NHuafyARE0qMJ5KdzjWaOuCUkMQgekcqf1ZEA3ojC5UVklIpNeCImnaTCgXZNMMfZDYCp6pKzvzlOUGPe~u4aZHY9HhgRD~8dqJWihTBgTnqkFwqGRkfNoT~8vVwdD-ShXnwmZJTiHMctZQb5dPJpNID6h6BT7olx1mkhRJHa-XkenZVV2EGgPU4vy1AlW~Ols6NExoIrGGik3g~gQeqGgz0mEVxj~AjonhPACz9T6vUlSN7JVzkOf8yhWgON20~Gs4lLPg__"
      alt="HTML Icon"
      className="h-12 w-12 mr-4"
    />
    <div>
      <h2 className="text-xl font-bold text-black">
        Hyper Text Markup Language
      </h2>
      <p className="text-gray-600">
        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
      </p>
    </div>
  </div>
  <button
    className="bg-blue-600 text-white mr--3 px-3 py-2 rounded-lg ml-auto"
    onClick={() => setIsModalOpen(true)}
  >
    Update
  </button>
</div>
          {/* Quick Statistics */}
          <section className="bg-white shadow p-1 rounded-lg mb-4">
            <h2 className="text-xl font-semibold text-black">Quick Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">{score.rank}</div>
                <div className="text-gray-500">Your Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">{score.percentile}%</div>
                <div className="text-gray-500">Percentile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">
                  {score.correctAnswers}/15
                </div>
                <div className="text-gray-500">Correct Answers</div>
              </div>
            </div>
          </section>
        </div>

        {/* Comparison Graph */}
        <section className="bg-white shadow p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold text-black">Comparison Graph</h2>
          <p className="text-gray-600 mt-2">
            You scored {score.percentile}% percentile, which is lower than the
            average percentile (72%).
          </p>
          <Line data={lineData} className="mt-4" />
        </section>

        {/* Syllabus Wise Analysis */}
        <section className="bg-white shadow p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold text-black">Syllabus Wise Analysis</h2>
          <div className="flex flex-col mt-4 space-y-6">
            {/* HTML Tools */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-medium">HTML Tools</span>
                <span className="text-black font-bold">{analysis.htmlTools}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${analysis.htmlTools}%` }}
                ></div>
              </div>
            </div>

            {/* Tags & References */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-medium">Tags & References</span>
                <span className="text-black font-bold">{analysis.tagsReferences}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${analysis.tagsReferences}%` }}
                ></div>
              </div>
            </div>

            {/* Tables References */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-medium">Tables References</span>
                <span className="text-black font-bold">{analysis.tablesReferences}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-red-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${analysis.tablesReferences}%` }}
                ></div>
              </div>
            </div>

            {/* CSS Basics */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-medium">CSS Basics</span>
                <span className="text-black font-bold">{analysis.cssBasics}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${analysis.cssBasics}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Question Analysis */}
        <section className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-black">Question Analysis</h2>
          <div className="mt-6 flex flex-col items-center">
            {/* Circular Progress Bar */}
            <div className="relative w-24 h-24">
              <div className="w-full h-full rounded-full border-4 border-gray-200"></div>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-black">
                  {((score.correctAnswers / 15) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-center">
              You scored {score.correctAnswers} questions correct out of 15.
              However, there is still room for improvement.
            </p>
          </div>
        </section>
      </main>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-black mb-4">Update Scores</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-black">Rank</label>
                <input
                  type="number"
                  className="w-full border p-2 rounded text-black"
                  value={tempValues.rank}
                  onChange={(e) =>
                    setTempValues({ ...tempValues, rank: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-black">Percentile</label>
                <input
                  type="number"
                  className="w-full border p-2 rounded text-black"
                  value={tempValues.percentile}
                  onChange={(e) =>
                    setTempValues({ ...tempValues, percentile: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-black">Correct Answers</label>
                <input
                  type="number"
                  className="w-full border p-2 rounded text-black"
                  value={tempValues.correctAnswers}
                  onChange={(e) =>
                    setTempValues({ ...tempValues, correctAnswers: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="bg-gray-300 px-4 py-2 rounded text-black"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
