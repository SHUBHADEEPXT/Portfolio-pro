export interface Project {
    slug: string;           // URL identifier (cicd-pipeline)
    title: string;          // Display name (CI/CD Pipeline Automation)
    description: string;    // Short summary for cards
    longDescription: string; // Detailed explanation
    techStack: string[];    // Technologies used
    features: string[];     // Key features built
    challenges: string[];   // Problems you solved
    outcomes: string[];     // Results and achievements
    githubUrl?: string;     // GitHub repo (optional)
    liveUrl?: string;      // Live demo (optional)
}

export const projects: Project[] = [
    {
        slug: 'cicd-pipeline',
        title: 'CI/CD Pipeline Automation',
        description: 'Automated deployment pipeline using Jenkins and Docker',
        longDescription: 'Built a comprehensive CI/CD pipeline that automatically tests, builds, and deploys applications across multiple environments. The pipeline includes automated testing, security scanning, Docker containerization, and zero-downtime deployment strategies.',
        techStack: ['Jenkins', 'Docker', 'AWS', 'Git', 'Bash', 'Kubernetes'],
        features: [
            'Automated testing and code quality checks',
            'Docker containerization with multi-stage builds',
            'Multi-environment deployment (dev, staging, prod)',
            'Automated rollback mechanisms',
            'Integration with monitoring systems'
        ],
        challenges: [
            'Implementing zero-downtime deployments',
            'Managing secrets and environment variables securely',
            'Optimizing build times and resource usage',
            'Handling complex dependency management'
        ],
        outcomes: [
            'Reduced deployment time from 2 hours to 15 minutes',
            'Achieved 99.9% uptime across all environments',
            'Eliminated manual deployment errors completely',
            'Improved developer productivity by 40%'
        ],
        githubUrl: 'https://github.com/DIFINDOXT/cicd-pipeline-project',
    },
    {
        slug: 'infrastructure-as-code',
        title: 'Infrastructure as Code with Terraform',
        description: 'AWS infrastructure managed with Terraform and automated provisioning',
        longDescription: 'Designed and implemented a complete Infrastructure as Code solution using Terraform to manage AWS cloud resources. The solution includes automated provisioning, environment consistency, and cost optimization strategies.',
        techStack: ['Terraform', 'AWS', 'CloudFormation', 'Ansible', 'Python'],
        features: [
            'Multi-environment infrastructure provisioning',
            'Automated resource scaling and optimization',
            'Infrastructure security and compliance',
            'Cost monitoring and budget alerts',
            'Disaster recovery automation'
        ],
        challenges: [
            'Managing state files across multiple environments',
            'Implementing infrastructure security best practices',
            'Optimizing costs while maintaining performance',
            'Ensuring compliance with industry standards'
        ],
        outcomes: [
            'Reduced infrastructure provisioning time by 80%',
            'Decreased cloud costs by 35% through optimization',
            'Achieved 100% infrastructure consistency',
            'Eliminated manual configuration drift'
        ],
        githubUrl: 'https://github.com/DIFINDOXT/terraform-aws-infrastructure',
    }
];
// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

// Helper function to get all projects
export function getAllProjects(): Project[] {
    return projects;
}