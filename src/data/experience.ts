import type { Experince } from "../types";

export const experience: Experince[] = [
    {
        title: "Backend Developer",
        description: "I was implementing a feature in CI/CD server - TeamCity. The feature allowes users to upload their custom CI/CD pipeline configuration process - stored as Kotlin file -  directly to the server instead of storing it somewhere in the version control system. With that possibility one can create even a library of utility config functions and easily share it with other users.",
        years: "2024",
        achievements: ["Working on a commercial project as a part of the team.", "Using listener Design Pattern in Java."],
        company: "JetBrains",
        technologies: ["Java", "Spring Boot"]
    },
    {
        title: "Informatics Olympiad Preparation",
        description: "I was teaching high school students algorithms and data structures to prepare them for Polish Informatics Olympiad. We started with simple algorithms like Binary Search and Prefix Sums, through Dynamic Programming, ending with many graph algorithms like DFS, BFS, SCC and Minimal Spanning Trees.",
        years: "2023-2024",
        achievements: ["Teaching other people", "Clear comunication"],
        company: "",
        technologies: ["C++", "Algorithms", "Data Structures"]
    },
    {
        title: "Polish Informatics Olympiad",
        description: "I took part in Polish Informatics Olympiad and get to second out of three stages. The Olympiad is focused on solving complex algorithmics and data structures problems.",
        years: "2022",
        achievements: ["Problem solving", "Graph algorithms", "Dynamic programming", "Hashing"],
        company: "",
        technologies: ["C++", "Algorithms", "Data Structures"]
    }
]