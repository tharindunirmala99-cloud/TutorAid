
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const AIPromptSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMatchTutor = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a student looking for a tutor. Here is what I need: ${prompt}. 
        Based on this, recommend a type of tutor, what subjects we should focus on, and a suggested weekly study frequency.
        Keep the response encouraging, professional, and under 150 words. Format it with nice markdown.`,
        config: {
          temperature: 0.7,
        }
      });

      setResponse(result.text || 'Sorry, I could not generate a recommendation at this time.');
    } catch (error) {
      console.error('Error matching tutor:', error);
      setResponse('An error occurred while reaching the AI service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-primary/5 dark:bg-primary/10 py-20 px-4 md:px-10 lg:px-40 border-y border-primary/20">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-black mb-4 dark:text-white">Not sure where to start?</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Tell us about your learning goals, and our AI will suggest the perfect tutoring path for you.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-xl border border-primary/30">
          <textarea
            className="w-full p-4 rounded-xl border border-neutral-200 dark:bg-background-dark dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:border-transparent resize-none mb-4 min-h-[120px]"
            placeholder="e.g., I'm struggling with 10th-grade geometry and want to prepare for my finals in two months. I prefer visual learning..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleMatchTutor}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-3 bg-primary text-black font-bold rounded-xl shadow-md hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                Analyzing your needs...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">auto_awesome</span>
                Get AI Recommendation
              </>
            )}
          </button>

          {response && (
            <div className="mt-8 p-6 bg-neutral-50 dark:bg-background-dark rounded-xl text-left border-l-4 border-primary">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                Your AI-Personalized Path:
              </h4>
              <div className="text-sm prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPromptSection;
