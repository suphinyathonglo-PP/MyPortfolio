import { computed, ref } from "vue";

const defaultLanguage = "th";

const language = ref(defaultLanguage);

if (typeof window !== "undefined") {
  const savedLanguage = window.localStorage.getItem("language");
  if (savedLanguage === "th" || savedLanguage === "en") {
    language.value = savedLanguage;
  }
}

const translations = {
  th: {
    nav: {
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      work: "ผลงาน",
      contact: "ติดต่อ",
      theme: "เปลี่ยนธีม",
      menu: "เปิดเมนู",
    },
    hero: {
      greeting: "สวัสดีค่ะ ดิฉันคือ",
      name: "สุภิญญา ทองหล่อ",
      rolePrefix: "I build as a",
      roles: [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
      ],
      description:
        "นักพัฒนา Full-Stack ที่สนใจการออกแบบระบบเว็บให้ใช้งานง่าย ดูแลต่อได้จริง และเชื่อมต่อข้อมูลอย่างเป็นระบบ มีประสบการณ์ทำงานกับ React, .NET, Node.js และฐานข้อมูลเชิงสัมพันธ์ พร้อมเรียนรู้เทคโนโลยีใหม่เพื่อสร้างงานที่ตอบโจทย์ผู้ใช้และธุรกิจ",
      resume: "Resume",
      contact: "ติดต่อร่วมงาน",
      imageAlt: "สุภิญญา ทองหล่อ",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      paragraphs: [
        "ดิฉันเป็นนักพัฒนาที่ให้ความสำคัญกับการทำความเข้าใจปัญหาก่อนลงมือเขียนโค้ด ชอบออกแบบระบบให้ชัดเจน ใช้งานง่าย และสามารถต่อยอดได้ในระยะยาว คุ้นเคยกับการทำงานรูปแบบ Agile/Scrum รวมถึงใช้ Git/GitHub, Jira และเครื่องมือสื่อสารร่วมกับทีมพัฒนา",
        "มีประสบการณ์พัฒนาเว็บแอปพลิเคชันทั้งฝั่ง Frontend และ Backend ตั้งแต่การสร้าง RESTful API, เชื่อมต่อฐานข้อมูล, ทดสอบ API ไปจนถึงการปรับปรุงคุณภาพโค้ดด้วยเครื่องมืออย่าง Swagger, Postman และ SonarQube โดยมุ่งเน้นงานที่ปลอดภัย มีประสิทธิภาพ และตอบโจทย์การใช้งานจริง",
      ],
      educationTitle: "ประวัติการศึกษา",
      education: [
        {
          period: "2565 - 2569",
          degree: "ปริญญาตรี วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
          school:
            "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร",
          gpa: "GPA: 3.67",
          active: true,
        },
        {
          period: "2562 - 2565",
          degree: "ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาคอมพิวเตอร์ธุรกิจ",
          school: "วิทยาลัยเทคโนโลยีพิชญบัณฑิต 2",
          gpa: "GPA: 3.82",
          active: false,
        },
      ],
    },
    skills: {
      title: "ทักษะและเครื่องมือ",
      groups: [
        {
          category: "Programming Languages",
          items: ["C#", "JavaScript", "TypeScript", "PHP"],
        },
        {
          category: "Frontend Development",
          items: ["React", "HTML", "CSS", "Bootstrap 5", "Tailwind CSS"],
        },
        {
          category: "Backend Development",
          items: [".NET", "Node.js", "Express.js", "Prisma ORM"],
        },
        {
          category: "Database Management",
          items: ["MySQL", "PostgreSQL", "SQL Server"],
        },
        {
          category: "Deployment & Tools",
          items: [
            "Render",
            "Neon",
            "Supabase",
            "Git/GitHub",
            "Swagger",
            "Postman",
            "SonarQube",
            "Jira",
            "Figma",
          ],
        },
        {
          category: "Soft Skills",
          items: [
            "แก้ปัญหาอย่างเป็นระบบ",
            "เรียนรู้และปรับตัวเร็ว",
            "บริหารเวลาได้ดี",
            "รับผิดชอบต่องาน",
          ],
        },
      ],
    },
    experience: {
      title: "ประสบการณ์และผลงาน",
      projectTitle: "ผลงานเด่น",
      jobs: [
        {
          role: "Full-Stack Developer Intern",
          company: "บริษัท โทคินเทค จำกัด - ทำงานรูปแบบ Work From Home 100%",
          period: "พ.ย. 2568 - มี.ค. 2569",
          project: "โปรเจกต์: WatchMan - ระบบติดตามและวิเคราะห์ API Logs",
          description:
            "พัฒนาเว็บแอปสำหรับช่วยทีมตรวจสอบสถานะ API วิเคราะห์ API Logs และ Error Logs จากหลายแอปพลิเคชัน เพื่อให้ติดตามปัญหาได้รวดเร็วขึ้น และลดเวลาการตรวจสอบระบบด้วยตนเอง",
          bullets: [
            "พัฒนา RESTful API ด้วย .NET (C#) และ Entity Framework Core",
            "พัฒนา Frontend ด้วย React และ TypeScript",
            "ออกแบบและจัดการข้อมูลด้วย SQL Server",
            "ใช้ SonarQube เพื่อตรวจสอบคุณภาพโค้ดและลดความเสี่ยงของ Bug",
            "จัดทำเอกสาร API ด้วย Swagger และทำงานร่วมกับทีมผ่าน Git, Jira และ Agile/Scrum",
          ],
        },
        {
          role: "ระบบเชื่อมโยงการซื้อขายผลิตภัณฑ์ทางการเกษตร",
          company: "โครงงานปริญญาตรี - SUANKASET",
          period: "พ.ย. 2567 - ต.ค. 2568",
          description:
            "เว็บแอปพลิเคชันสำหรับเชื่อมโยงผู้ซื้อและผู้ขายสินค้าเกษตร พร้อมระบบประกาศขายสินค้า ระบบประมูล และการจัดการผู้ใช้หลายบทบาท",
          bullets: [
            "ออกแบบฟีเจอร์หลัก เช่น ค้นหาสินค้า ตะกร้าสินค้า และการประมูล",
            "Frontend: React.js + Tailwind CSS | Backend: Node.js + Express.js",
            "ใช้ PostgreSQL + Prisma ORM จัดการฐานข้อมูลและความสัมพันธ์ของข้อมูล",
            "ทดสอบ API ด้วย Postman และ Deploy ระบบบน Render",
          ],
        },
      ],
      miniProjects: [
        {
          period: "ส.ค. - ต.ค. 2567",
          title: "CoffeeShop Manager",
          description:
            "ระบบจัดการร้านกาแฟที่รองรับการขายหน้าร้าน การจัดการสินค้า และรายงานยอดขาย พร้อมออกแบบ UI/UX ด้วย Figma",
        },
        {
          period: "ก.ย. - พ.ย. 2566",
          title: "ระบบบันทึกเวลาเข้า-ออกงาน",
          description:
            "เว็บแอปสำหรับบันทึกเวลาเข้า-ออกงาน โดยใช้ HTML, CSS, JavaScript, Bootstrap 5 ฝั่ง Frontend และ PHP เชื่อมต่อ MySQL ฝั่ง Backend",
        },
      ],
      projects: [
        {
          id: 1,
          title: "WatchMan - API Log Monitor",
          description:
            "ระบบติดตามสถานะ API และวิเคราะห์ Error Logs สำหรับทีมพัฒนา",
          tech: [".NET", "React", "TypeScript", "SQL Server"],
          live: "",
          repo: "",
          link: "",
          range: "พ.ย. 2568",
          initials: "WM",
        },
        {
          id: 2,
          title: "SUANKASET",
          description:
            "แพลตฟอร์มซื้อขายสินค้าเกษตร พร้อมระบบประมูลและจัดการผู้ใช้",
          tech: ["React", "Node.js", "PostgreSQL"],
          live: "",
          repo: "",
          link: "https://projectsuankaset-1.onrender.com/",
          range: "ต.ค. 2568",
          initials: "AC",
        },
        {
          id: 3,
          title: "CoffeeShop Manager",
          description:
            "ระบบจัดการร้านกาแฟ ครอบคลุมการขาย สินค้า และรายงานยอดขาย",
          tech: ["HTML", "Bootstrap", "PHP", "MySQL"],
          live: "",
          repo: "",
          link: "https://www.figma.com/proto/5vGMbcqDbH1JYH603kYouH/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=3-20&starting-point-node-id=3%3A20&t=rhuIiWQSQ2roFNMQ-1",
          range: "ต.ค. 2567",
          initials: "CS",
        },
      ],
    },
    contact: {
      title: "ติดต่อ",
      description:
        "หากต้องการร่วมงาน พูดคุยเกี่ยวกับโปรเจกต์ หรือแลกเปลี่ยนมุมมองด้านเทคโนโลยี สามารถติดต่อดิฉันได้ตามช่องทางด้านล่าง",
      noteTitle: "พร้อมพูดคุยรายละเอียดงานและโปรเจกต์ใหม่",
      note:
        "ติดต่อผ่าน Email หรือ Line ได้สะดวกที่สุด หากต้องการข้อมูลเพิ่มเติมสามารถนัดพูดคุยรายละเอียดได้เสมอ",
      items: [
        {
          label: "Phone",
          value: "094-742-2192",
          href: "tel:0947422192",
          icon: "☎",
          ariaLabel: "โทร 094-742-2192",
        },
        {
          label: "Email",
          value: "suphinyathonglo@gmail.com",
          href: "mailto:suphinyathonglo@gmail.com",
          icon: "@",
          ariaLabel: "ส่งอีเมลถึง suphinyathonglo@gmail.com",
        },
        {
          label: "Line ID",
          value: "260946suphinya",
          href: "https://line.me/ti/p/~260946suphinya",
          icon: "#",
          ariaLabel: "ติดต่อผ่าน Line ID 260946suphinya",
        },
        {
          label: "Address",
          value: "199 หมู่ 5 ต.บ้านเป็ด อ.เมือง จ.ขอนแก่น 40000",
          href: "https://www.google.com/maps/search/?api=1&query=199%20%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%205%20%E0%B8%95.%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%20%E0%B8%AD.%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%2040000",
          icon: "⌖",
          ariaLabel: "ดูที่อยู่บนแผนที่",
        },
      ],
    },
    footer: "© 2026 Suphinya Thonglo. Built with Vue and care.",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
      theme: "Toggle theme",
      menu: "Open menu",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Suphinya Thonglo",
      rolePrefix: "I build as a",
      roles: [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
      ],
      description:
        "A Full-Stack Developer who enjoys building web systems that are clear, usable, maintainable, and well connected to data. I have hands-on experience with React, .NET, Node.js, and relational databases, and I am always ready to learn new technologies that create real value for users and businesses.",
      resume: "Resume",
      contact: "Contact me",
      imageAlt: "Suphinya Thonglo",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I am a developer who values understanding the problem before writing code. I like designing systems that are clear, practical, easy to use, and ready to grow over time. I am familiar with Agile/Scrum workflows and team collaboration through Git/GitHub, Jira, and communication tools.",
        "I have experience building both frontend and backend parts of web applications, including RESTful APIs, database integration, API testing, and code quality improvement with tools such as Swagger, Postman, and SonarQube. My focus is on secure, efficient, and practical solutions.",
      ],
      educationTitle: "Education",
      education: [
        {
          period: "2022 - 2026",
          degree: "Bachelor of Engineering in Computer Engineering",
          school:
            "Kasetsart University, Chalermphrakiat Sakon Nakhon Province Campus",
          gpa: "GPA: 3.67",
          active: true,
        },
        {
          period: "2019 - 2022",
          degree: "Vocational Certificate in Business Computer",
          school: "Pitchayabundit 2 Technology College",
          gpa: "GPA: 3.82",
          active: false,
        },
      ],
    },
    skills: {
      title: "Skills & Tools",
      groups: [
        {
          category: "Programming Languages",
          items: ["C#", "JavaScript", "TypeScript", "PHP"],
        },
        {
          category: "Frontend Development",
          items: ["React", "HTML", "CSS", "Bootstrap 5", "Tailwind CSS"],
        },
        {
          category: "Backend Development",
          items: [".NET", "Node.js", "Express.js", "Prisma ORM"],
        },
        {
          category: "Database Management",
          items: ["MySQL", "PostgreSQL", "SQL Server"],
        },
        {
          category: "Deployment & Tools",
          items: [
            "Render",
            "Neon",
            "Supabase",
            "Git/GitHub",
            "Swagger",
            "Postman",
            "SonarQube",
            "Jira",
            "Figma",
          ],
        },
        {
          category: "Soft Skills",
          items: [
            "Systematic problem solving",
            "Fast learning and adaptability",
            "Time management",
            "Responsibility and ownership",
          ],
        },
      ],
    },
    experience: {
      title: "Experience & Work",
      projectTitle: "Featured Projects",
      jobs: [
        {
          role: "Full-Stack Developer Intern",
          company: "TokenTech Co., Ltd. - Work From Home 100%",
          period: "Nov 2025 - Mar 2026",
          project: "Project: WatchMan - API Logs Monitoring and Analysis",
          description:
            "Developed a web application that helps development teams monitor API status and analyze API logs and error logs across multiple applications, making issue tracking faster and reducing manual inspection time.",
          bullets: [
            "Developed RESTful APIs with .NET (C#) and Entity Framework Core",
            "Built the frontend with React and TypeScript",
            "Designed and managed data with SQL Server",
            "Used SonarQube to inspect code quality and reduce bug risk",
            "Created API documentation with Swagger and collaborated through Git, Jira, and Agile/Scrum",
          ],
        },
        {
          role: "Agricultural Product Trading Platform",
          company: "Senior Project - SUANKASET",
          period: "Nov 2024 - Oct 2025",
          description:
            "Built a web application that connects buyers and sellers of agricultural products, with product listing, auction features, and multi-role user management.",
          bullets: [
            "Designed key features such as product search, shopping cart, and auctions",
            "Frontend: React.js + Tailwind CSS | Backend: Node.js + Express.js",
            "Used PostgreSQL + Prisma ORM to manage data and relationships",
            "Tested APIs with Postman and deployed the system on Render",
          ],
        },
      ],
      miniProjects: [
        {
          period: "Aug - Oct 2024",
          title: "CoffeeShop Manager",
          description:
            "A coffee shop management system covering point-of-sale workflows, product management, and sales reports, with UI/UX designed in Figma.",
        },
        {
          period: "Sep - Nov 2023",
          title: "Attendance Time Tracking System",
          description:
            "A web application for recording employee check-in and check-out times, built with HTML, CSS, JavaScript, Bootstrap 5, PHP, and MySQL.",
        },
      ],
      projects: [
        {
          id: 1,
          title: "WatchMan - API Log Monitor",
          description:
            "An API status monitoring and error log analysis system for development teams",
          tech: [".NET", "React", "TypeScript", "SQL Server"],
          live: "",
          repo: "",
          link: "",
          range: "Nov 2025",
          initials: "WM",
        },
        {
          id: 2,
          title: "SUANKASET",
          description:
            "An agricultural product marketplace with auction and user management features",
          tech: ["React", "Node.js", "PostgreSQL"],
          live: "",
          repo: "",
          link: "https://projectsuankaset-1.onrender.com/",
          range: "Oct 2025",
          initials: "AC",
        },
        {
          id: 3,
          title: "CoffeeShop Manager",
          description:
            "A coffee shop management system for sales, products, and sales reports",
          tech: ["HTML", "Bootstrap", "PHP", "MySQL"],
          live: "",
          repo: "",
          link: "https://www.figma.com/proto/5vGMbcqDbH1JYH603kYouH/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=3-20&starting-point-node-id=3%3A20&t=rhuIiWQSQ2roFNMQ-1",
          range: "Oct 2024",
          initials: "CS",
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "If you would like to collaborate, discuss a project, or exchange ideas about technology, feel free to contact me through the channels below.",
      noteTitle: "Open to discussing new work and projects",
      note:
        "Email or Line is the most convenient way to reach me. I am happy to arrange a conversation for more details.",
      items: [
        {
          label: "Phone",
          value: "094-742-2192",
          href: "tel:0947422192",
          icon: "☎",
          ariaLabel: "Call 094-742-2192",
        },
        {
          label: "Email",
          value: "suphinyathonglo@gmail.com",
          href: "mailto:suphinyathonglo@gmail.com",
          icon: "@",
          ariaLabel: "Email suphinyathonglo@gmail.com",
        },
        {
          label: "Line ID",
          value: "260946suphinya",
          href: "https://line.me/ti/p/~260946suphinya",
          icon: "#",
          ariaLabel: "Contact via Line ID 260946suphinya",
        },
        {
          label: "Address",
          value: "199 Moo 5, Ban Ped, Mueang Khon Kaen, Khon Kaen 40000",
          href: "https://www.google.com/maps/search/?api=1&query=199%20%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%205%20%E0%B8%95.%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%20%E0%B8%AD.%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%2040000",
          icon: "⌖",
          ariaLabel: "View address on map",
        },
      ],
    },
    footer: "© 2026 Suphinya Thonglo. Built with Vue and care.",
  },
};

export function useI18n() {
  const content = computed(() => translations[language.value]);

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "th" && nextLanguage !== "en") return;
    language.value = nextLanguage;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", nextLanguage);
    }
  }

  function toggleLanguage() {
    setLanguage(language.value === "th" ? "en" : "th");
  }

  return {
    content,
    language,
    setLanguage,
    toggleLanguage,
  };
}
