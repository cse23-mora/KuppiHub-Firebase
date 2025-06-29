import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Preloader from '../components/Preloader'; // Import Preloader component

const semesters = [
//   {
//     id: 1,
//     name: 'Semester 1',
//     slug: 'sem1',
//     description: 'Foundation courses and basic engineering principles',
//     subjects: ['Mathematics I', 'Physics', 'Chemistry', 'Programming Fundamentals', 'Engineering Drawing'],
//     color: 'from-blue-600 to-indigo-600'
//   },
  {
    id: 2,
    name: 'Semester 2',
    slug: 'sem2',
    description: 'Advanced fundamentals and core engineering concepts',
    subjects: ['Mathematics II', 'Data Structures', 'Digital Logic', 'Object Oriented Programming', 'Engineering Mechanics'],
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 3,
    name: 'Semester 3',
    slug: 'sem3',
    description: 'Specialized courses and practical applications',
    subjects: ['Database Systems', 'Computer Networks', 'Operating Systems', 'Software Engineering', 'Web Development'],
    color: 'from-purple-600 to-pink-600'
  }
//   {
//     id: 4,
//     name: 'Semester 4',
//     slug: 'sem4',
//     description: 'Advanced topics and project-based learning',
//     subjects: ['Machine Learning', 'Mobile Development', 'Cloud Computing', 'Final Year Project', 'Industrial Training'],
//     color: 'from-orange-600 to-red-600'
//   }
];

export default function Semesters() {
  // Remove videos and setVideos
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // No need to call setVideos
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [setLoading]);
  
  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Select Semester
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {semesters.map(semester => {
            return (
              <Link 
                to={`./../${semester.slug}`} 
                key={semester.slug}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl">
                  <div className="relative h-48 w-full">
                    <div className={`h-full w-full bg-gradient-to-br ${semester.color} flex items-center justify-center group-hover:opacity-90 transition-opacity duration-300`}>
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2 opacity-20">
                          {semester.id}
                        </div>
                        <div className="text-xl font-semibold">
                          {semester.name}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-semibold">{semester.subjects.length} subjects available</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                      {semester.name}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {semester.description}
                    </p>
                    
                    {/* Subject tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {semester.subjects.slice(0, 3).map((subject, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                      {semester.subjects.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{semester.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Academic Year {Math.ceil(semester.id / 2)}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {semester.subjects.length} Subjects
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${semester.color} h-2 rounded-full transition-all duration-300`}
                              style={{ width: `${(semester.id / 4) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-600 mb-6">
              Navigate through your academic journey with our comprehensive semester-wise content. 
              Each semester builds upon the previous one, providing a structured learning experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {semesters.map((sem, index) => (
                <div key={sem.id} className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${sem.color} flex items-center justify-center text-white font-bold`}>
                    {sem.id}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{sem.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{sem.subjects.length} subjects</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}