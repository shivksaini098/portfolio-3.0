import { FaGraduationCap, FaSchool, FaCode, FaChartLine, FaUsers, FaLaptop, FaPercent, FaTrophy } from 'react-icons/fa';
import Experience from './Experience';

export const userData = {
    Home: {
        user: "Shiv Kumar Saini",
        title: "Senior Software Developer",
        description: "Building engaging multiplayer games and cross-platform experiences that look great and run seamlessly on mobile and beyond.",
        profileImage: "./p2.jpeg"
    },
    About: {
        title: "About Me",
        description: "I’m a game developer with 3+ years of experience turning ideas into immersive 2D and 3D games. I work with Unity, Cocos Creator, Cocos2d-x, and SmartFox, and code in C++, C#, Java, JavaScript, and TypeScript across Android, iOS, and web platforms. From real-time multiplayer games like LudoTalks, PokerDate, Chess, and Snake & Ladder to simulation-style experiences, I’ve built and led projects that connect people through play. I love crafting smooth gameplay, solving tough problems, and leading teams to bring bold concepts to life.",
        mySkill: "My Skills",
        skills: ["C++", "SmartFox", "TypeScript", "JavaScript", "Java", "SQL", "Node.Js", "Unity", "Cocos Creator", "Android Studio", "Rect.Js", "Express.Js", "GitHub", "Cocos2dx", "IOS"],
    },

    Education: [
        {
            icon: <FaGraduationCap />,
            title: "Master of Computer Application",
            institution: "Vivekananda Global University (VGU)",
            duration: "2025",
            status: "Ongoing",
            highlights: [
                { icon: <FaCode />, text: "Full-Stack Development Focus" },
                { icon: <FaChartLine />, text: "Current CGPA: 8.9/10" },
            ]
        },
        {
            icon: <FaGraduationCap />,
            title: "Bachelor of Computer Applications",
            institution: "Maharishi Arvind Institute of Science & Management (MAISM)",
            duration: "2018 - 2020",
            status: "Completed",
            highlights: [
                { icon: <FaLaptop />, text: "IFull-Stack Development Focus" },
                { icon: <FaPercent />, text: "Achieved: 65%" },
            ]
        }
    ],

    Project: [
        {
            title: "Ludotalks",
            description: "online ludo playing application have feture like multiplayer ludo group chat and circule (group that can play ludo) and add money withdrowal and kyc etc",
            tech: ["JavaScript", "typescript", "Cocos creator", "java", "smartfox", "Android", "Ios"],
            live: "https://ludotalks.in/",
            image: 'ludo 24 (1)EEEE 1.png',
            github: ""
        },
        {
            title: "Poker Date (Game + Dating Application)",
            description: "Enhanced app performance and optimized the user experience through UI/UX revamp.",
            tech: ["Cocos2dx", "C++", "Firebase", "java", "Android", "Ios"],
            live: "https://www.pokerdate.net/",
            image: 'pokerImage.webp',
            github: ""
        }, {
            title: "AGEC High School (Simulation Game)",
            description: "Implemented gameplay systems and interactive mini-games to increase engagement.",
            tech: ["JS", "Cocos2dx", "java", "Android", "Ios"],
            live: "https://theentrepreneurshipchallenge.com/",
            image: 'logo3.svg',
            github: ""
        }
    ],

    contactUs: {
        gmail: "shivksaini0120@gmail.com",
        phone: "+91 9461216635",
        location: "Jaipur, Rajasthan, India",
        github: "https://github.com/shivksaini",
        linkedIn: "https://www.linkedin.com/in/shiv-k-saini",
        instragram: "https://www.instagram.com/i_am_shiv099/",
        twiter: "https://x.com/ShivKum09924768"
    },

    Experience: [
        {
            title: "Assert Infotech (12/21 - PRESENT)",
            description: "Assert Infotech breathes life into captivating games for PC, consoles, and mobile. Their expert team blends technical magic (JS, TS, C++, etc.) with creative fire to transform your vision into unforgettable gaming experiences. From thrilling adventures to casual delights, they craft diverse worlds tailored to every preference. Dive into a partnership built on transparency, trust, and shared success. Let Assert Infotech guide your game from concept to captivating reality.",
            skills: ["C++", "SmartFox", "TypeScript", "JavaScript", "Cocos Creator", "Android Studio", "Cocos2dx", "IOS"],
        }
    ],
    footerMessage: "",
    resumeLink: "https://drive.google.com/file/d/1yADRFqPnDhBTaszUNKQ73WqKestmeaVv/view"
}
