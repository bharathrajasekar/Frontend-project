// pages/index.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import Head from 'next/head';

export default function SkillTest() {
  const [score, setScore] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
  });

  const [analysis, setAnalysis] = useState({
    htmlTools: 80,
    tagsReferences: 60,
    tablesReferences: 24,
    tablesCss: 96,
  });

  const handleUpdateScore = (newScore) => {
    setScore(newScore);
    setAnalysis({
      ...analysis,
      htmlTools: newScore.correctAnswers * 8,
      tagsReferences: newScore.correctAnswers * 6,
      tablesReferences: newScore.correctAnswers * 2.4,
      tablesCss: newScore.correctAnswers * 9.6,
    });
  };

  const lineData = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        label: 'Percentile',
        data: [0, 30, 50, 75, score.percentile],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: ['HTML Tools', 'Tags & References', 'Tables References', 'CSS Basics'],
    datasets: [
      {
        data: [
          analysis.htmlTools,
          analysis.tagsReferences,
          analysis.tablesReferences,
          analysis.tablesCss,
        ],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#2196f3'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Skill Test Dashboard</title>
      </Head>

      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">Skill Test</h1>
      </header>

      <main className="p-4">
        <section className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Quick Statistics</h2>
          <div className="flex justify-between mt-4">
            <div>Your Rank: {score.rank}</div>
            <div>Percentile: {score.percentile}%</div>
            <div>Correct Answers: {score.correctAnswers}/15</div>
          </div>
        </section>

        <section className="bg-white shadow p-4 rounded-lg mt-4">
          <h2 className="text-xl font-semibold">Comparison Graph</h2>
          <Line data={lineData} />
        </section>

        <section className="bg-white shadow p-4 rounded-lg mt-4">
          <h2 className="text-xl font-semibold">Syllabus Wise Analysis</h2>
          <Pie data={pieData} />
        </section>

        <section className="bg-white shadow p-4 rounded-lg mt-4">
          <h2 className="text-xl font-semibold">Update Scores</h2>
          <div className="mt-4">
            <input
              type="number"
              placeholder="Rank"
              value={score.rank}
              onChange={(e) =>
                handleUpdateScore({ ...score, rank: parseInt(e.target.value, 10) })
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Percentile"
              value={score.percentile}
              onChange={(e) =>
                handleUpdateScore({
                  ...score,
                  percentile: parseInt(e.target.value, 10),
                })
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Correct Answers"
              value={score.correctAnswers}
              onChange={(e) =>
                handleUpdateScore({
                  ...score,
                  correctAnswers: parseInt(e.target.value, 10),
                })
              }
              className="border p-2 rounded w-full mb-2"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
