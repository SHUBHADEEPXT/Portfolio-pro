export interface Project {
    slug: string;           // URL identifier (cicd-pipeline)
    title: string;          // Display name (CI/CD Pipeline Automation)
    description: string;    // Short summary for cards
    fullDescription?: string; // Detailed explanation for project page
    longDescription: string; // Keep for backward compatibility
    technologies: string[]; // Technologies used (renamed from techStack)
    techStack: string[];    // Keep for backward compatibility
    features: string[];     // Key features built
    challenges: string[];   // Problems you solved
    outcomes: {
        metric: string;
        value: string;
    }[];                   // Enhanced outcomes with metrics
    githubUrl?: string;     // GitHub repo (optional)
    liveUrl?: string;       // Live demo (optional)
    category?: string;      // Project category
    status?: 'completed' | 'in-progress' | 'planning';
    startDate?: string;     // Project start date
    endDate?: string;       // Project completion date
}

export const projects: Project[] = [
    {
        slug: 'cicd-pipeline',
        title: 'CI/CD Pipeline Automation',
        description: 'Automated deployment pipeline using Jenkins and Docker',
        fullDescription: 'Built a comprehensive CI/CD pipeline that automatically tests, builds, and deploys applications across multiple environments. This enterprise-grade solution includes automated testing, security scanning, Docker containerization, and zero-downtime deployment strategies that have revolutionized our development workflow.',
        longDescription: 'Built a comprehensive CI/CD pipeline that automatically tests, builds, and deploys applications across multiple environments. The pipeline includes automated testing, security scanning, Docker containerization, and zero-downtime deployment strategies.',
        technologies: ['Jenkins', 'Docker', 'AWS', 'Git', 'Bash', 'Kubernetes'],
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
            { metric: 'Deployment Time', value: '2 hours → 15 minutes' },
            { metric: 'System Uptime', value: '99.9%' },
            { metric: 'Manual Errors', value: '100% eliminated' },
            { metric: 'Developer Productivity', value: '+40% increase' }
        ],
        githubUrl: 'https://github.com/DIFINDOXT/cicd-pipeline-project',
        category: 'DevOps Automation',
        status: 'completed',
        startDate: '2024-01',
        endDate: '2024-03'
    },
    {
        slug: 'infrastructure-as-code',
        title: 'Infrastructure as Code with Terraform',
        description: 'AWS infrastructure managed with Terraform and automated provisioning',
        fullDescription: 'Designed and implemented a complete Infrastructure as Code solution using Terraform to manage AWS cloud resources. The solution provides automated provisioning, environment consistency, cost optimization strategies, and ensures compliance with industry standards across multiple environments.',
        longDescription: 'Designed and implemented a complete Infrastructure as Code solution using Terraform to manage AWS cloud resources. The solution includes automated provisioning, environment consistency, and cost optimization strategies.',
        technologies: ['Terraform', 'AWS', 'CloudFormation', 'Ansible', 'Python'],
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
            { metric: 'Provisioning Time', value: '80% reduction' },
            { metric: 'Cloud Costs', value: '35% decrease' },
            { metric: 'Infrastructure Consistency', value: '100% achieved' },
            { metric: 'Configuration Drift', value: 'Eliminated' }
        ],
        githubUrl: 'https://github.com/DIFINDOXT/terraform-aws-infrastructure',
        category: 'Infrastructure',
        status: 'completed',
        startDate: '2024-02',
        endDate: '2024-04'
    },
    {
        slug: 'kubernetes-cluster',
        title: 'Production Kubernetes Cluster',
        description: 'High-availability Kubernetes cluster with monitoring and auto-scaling',
        fullDescription: 'Architected and deployed a production-grade Kubernetes cluster on AWS with advanced monitoring, logging, auto-scaling, and security features. This cluster now hosts multiple microservices and handles thousands of requests per minute with 99.99% uptime.',
        longDescription: 'Built a production-grade Kubernetes cluster with comprehensive monitoring, logging, and auto-scaling capabilities.',
        technologies: ['Kubernetes', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
        techStack: ['Kubernetes', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
        features: [
            'High-availability multi-zone deployment',
            'Automatic horizontal and vertical pod scaling',
            'Advanced monitoring with Prometheus and Grafana',
            'Service mesh implementation with Istio',
            'Automated backup and disaster recovery'
        ],
        challenges: [
            'Designing for high availability across zones',
            'Implementing proper resource quotas and limits',
            'Setting up comprehensive monitoring and alerting',
            'Managing ingress traffic and load balancing'
        ],
        outcomes: [
            { metric: 'Uptime', value: '99.99%' },
            { metric: 'Resource Utilization', value: '60% improvement' },
            { metric: 'Deployment Frequency', value: '5x increase' },
            { metric: 'Mean Time to Recovery', value: '90% reduction' }
        ],
        githubUrl: 'https://github.com/DIFINDOXT/kubernetes-production-cluster',
        category: 'Container Orchestration',
        status: 'completed',
        startDate: '2024-03',
        endDate: '2024-05'
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