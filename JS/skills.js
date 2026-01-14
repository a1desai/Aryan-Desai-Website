// Skills Data
const skillsData = [
    {
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML/CSS", "C", "Bash"]
    },
    {
        title: "Web Technologies",
        items: ["React.js", "Node.js", "Express.js", "Next.js", "PostgreSQL", "REST APIs", "TailwindCSS"]
    },
    {
        title: "Tools & Frameworks",
        items: ["Docker", "AWS", "Git/GitHub", "PyTorch", "Jest", "TensorFlow", "Linux/Unix"]
    }
];

// Experience Data - Updated from resume
const experienceData = [
    {
        role: "Technology Director",
        organization: "Google Developer Groups on Campus",
        date: "November 2025 - Present",
        description: "Lead development team using Agile methodologies, conducting peer code reviews and mentoring 50+ students on web development",
        icon: "fa-google",
        image: "Images/GDSG.jpg"
    },
    {
        role: "AI/ML Contributor",
        organization: "Byte - SecureByte",
        date: "September 2025 - November 2025",
        description: "Optimized codebase processing workflows using Python, implementing automated testing reducing failures by 35%",
        icon: "fa-code",
        image: "Images/Byte.jpg"
    },
    {
        role: "Back End Developer",
        organization: "Quantum Science and Engineering Club",
        date: "November 2025 - Present",
        description: "Developed backend architecture for quantum visualization platform, implementing scalable code and database operations",
        icon: "fa-cube",
        image: "Images/Qsec.jpg"
    }
];

const skillsContainer = document.getElementById('skills-container');
const experienceContainer = document.getElementById('experience-container');

// Toggle Skills
function toggleSkills() {
    const isSkillsVisible = skillsContainer.classList.contains('active');
    
    // Hide experience
    experienceContainer.classList.remove('active');
    experienceContainer.style.display = 'none';
    
    if (!isSkillsVisible) {
        // Show skills
        skillsContainer.classList.add('active');
        skillsContainer.innerHTML = '';
        skillsContainer.style.display = 'grid';
        skillsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        skillsContainer.style.marginTop = '12px';
        skillsContainer.style.gap = '12px';

        skillsData.forEach((category, index) => {
            const div = document.createElement('div');
            div.classList.add('skill-category');

            // Category Icon
            const icons = ['fa-code', 'fa-server', 'fa-tools'];
            const iconDiv = document.createElement('div');
            const icon = document.createElement('i');
            icon.className = `fas ${icons[index]}`;
            iconDiv.appendChild(icon);
            div.appendChild(iconDiv);

            const h3 = document.createElement('h3');
            h3.textContent = category.title;
            div.appendChild(h3);

            const ul = document.createElement('ul');
            
            category.items.forEach(item => {
                const li = document.createElement('li');
                
                const checkmark = document.createElement('span');
                checkmark.textContent = '✓';
                
                const text = document.createElement('span');
                text.textContent = item;
                
                li.appendChild(checkmark);
                li.appendChild(text);
                
                li.addEventListener('mouseenter', function() {
                    text.style.color = '#00c0ff';
                    text.style.fontWeight = '600';
                    checkmark.style.transform = 'scale(1.3)';
                });
                
                li.addEventListener('mouseleave', function() {
                    text.style.color = '#c8dff5';
                    text.style.fontWeight = '400';
                    checkmark.style.transform = 'scale(1)';
                });
                
                ul.appendChild(li);
            });
            div.appendChild(ul);

            // Card hover effects
            div.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 35px rgba(0, 192, 255, 0.25)';
                this.style.backgroundColor = 'rgba(0, 192, 255, 0.12)';
                this.style.borderColor = 'rgba(0, 192, 255, 0.4)';
            });

            div.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = 'rgba(0, 192, 255, 0.08)';
                this.style.borderColor = 'rgba(0, 192, 255, 0.2)';
            });

            skillsContainer.appendChild(div);
        });

        skillsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        // Hide skills
        skillsContainer.classList.remove('active');
        skillsContainer.style.display = 'none';
    }
}

// Toggle Experience
function toggleExperience() {
    const isExperienceVisible = experienceContainer.classList.contains('active');
    
    // Hide skills
    skillsContainer.classList.remove('active');
    skillsContainer.style.display = 'none';

    if (!isExperienceVisible) {
        // Show experience
        experienceContainer.classList.add('active');
        experienceContainer.innerHTML = '';
        experienceContainer.style.display = 'grid';
        experienceContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        experienceContainer.style.marginTop = '12px';
        experienceContainer.style.gap = '12px';

        experienceData.forEach(exp => {
            const div = document.createElement('div');
            div.classList.add('experience-card');

            // Icon
            const iconDiv = document.createElement('div');
            const icon = document.createElement('i');
            icon.className = `fas ${exp.icon}`;
            iconDiv.appendChild(icon);
            div.appendChild(iconDiv);

            const role = document.createElement('h3');
            role.textContent = exp.role;
            div.appendChild(role);

            const org = document.createElement('p');
            org.textContent = exp.organization;
            div.appendChild(org);

            const date = document.createElement('p');
            date.classList.add('exp-date');
            date.textContent = exp.date;
            div.appendChild(date);

            const description = document.createElement('p');
            description.textContent = exp.description;
            div.appendChild(description);

            // Image container
            const imgBox = document.createElement('div');
            imgBox.classList.add('exp-img-box');
            const img = document.createElement('img');
            img.src = exp.image;
            img.alt = exp.organization;
            imgBox.appendChild(img);
            div.appendChild(imgBox);

            // Hover effect
            div.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-6px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 192, 255, 0.2)';
                this.style.backgroundColor = 'rgba(0, 192, 255, 0.12)';
            });

            div.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = 'rgba(0, 192, 255, 0.08)';
            });

            experienceContainer.appendChild(div);
        });

        experienceContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        // Hide experience
        experienceContainer.classList.remove('active');
        experienceContainer.style.display = 'none';
    }
}

// Event listeners
document.getElementById('skills-btn').addEventListener('click', toggleSkills);
document.getElementById('experience-btn').addEventListener('click', toggleExperience);

