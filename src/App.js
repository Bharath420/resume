import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Bharath Madvar's Resume</h1>
        <p>Cloud & DevOps Engineer</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> bharathmadvar@gmail.com</p>
        <p><strong>Phone:</strong> 732-783-8757</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/bharath-madvar-230a03271" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>

      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Cloud & DevOps Engineer with 8 years of experience leading a dedicated team specializing in tool building, Kubernetes administration in Docker EE, CI/CD pipeline design and support, monitoring, application administration, and container platform design and administration. A complex problem-solver with an analytical and driven mindset, holding Terraform and Kubernetes Admin Certification.
        </p>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>CLOUD - AWS, GCP</li>
          <li>Infrastructure as Code: Terraform, CloudFormation</li>
          <li>Operating Systems: Linux (Red Hat, CentOS, SUSE), Ubuntu, HPUX, Windows</li>
          <li>Scripting: Shell Scripting, Groovy, Python, Ruby, Perl, PowerShell</li>
          <li>Build Tools: Maven, Gradle, Sonar, Nexus, Ant</li>
          <li>Version Control Tools: GIT, GitHub, GitLab, Subversion (SVN), Bitbucket</li>
          <li>Orchestration Tools: Kubernetes, Docker Swarm, Google Cloud Engine</li>
          <li>Networking Protocols: TCP/IP, DNS, DHCP, Cisco Routers/Switches, WAN, LAN, SMTP</li>
          <li>Monitoring Tools: Nagios, AWS CloudWatch, Splunk, ELK</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Master’s in Computer Science and Web Development Technology - Wilmington University</h3>
          <p><em>New Castle, DE | 2017</em></p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Certified Kubernetes Administrator (CKA)</li>
          <li>Certified Terraform Associate</li>
          <li>Certified AWS DevOps Engineer</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        
        <div className="job">
          <h3>Software Engineer DevOps / GCP - Lowe’s</h3>
          <p><em>Charlotte, NC | October 2022 - Present</em></p>
          <ul>
            <li>Implemented a production-ready, load-balanced, highly available, fault-tolerant GCP Kubernetes infrastructure from scratch using Akamai, GLB, F5, and Palo Alto application VMS.</li>
            <li>Developed, maintained, and enhanced post and pre-development scripts using Shell and Python.</li>
            <li>Managed and configured GCP service accounts, IAM policies, Google Cloud Virtual Private Cloud (VPC), subnets, Compute, Storage, Networking, GCS buckets, and GKE using Terraform as Infrastructure as Code.</li>
            <li>Created dynamic routing/load balancing capabilities by enabling large application scaling using Istio-gateway.</li>
            <li>Developed and managed LEC with Loci template for end-to-end self-service deployments to developers.</li>
            <li>Utilized Venafi as a Service (VaaS) and Venafi Trust Protection Platform (TPP) for certificate issuer management integrated with cert-manager.</li>
            <li>Managed Vault OIDC method for secret policy and path-based configuration based on GCP service accounts.</li>
            <li>Used Terraform as IaaS to provision GCP platform, adding IAM, AD_GROUP and service accounts, node pools, autoscaling, CIDR ranges, and managing GKE.</li>
            <li>Managed custom Helm build templates for Spinnaker, security webhooks, Vault, and Forseti security tools integrated with JFrog Artifactory.</li>
            <li>Implemented data visualization with Forseti security tool by integrating scanner, inventory, explanation, and notifier modules with GCP Cloud SQL.</li>
            <li>Created fully automated build, test, and deployment processes using Spinnaker for deploying new versions.</li>
            <li>Troubleshot and analyzed networking packet captures using Wireshark, Tcpdump, and hey tools.</li>
            <li>Developed Grafana Dashboards for GLB latency errors, Kubernetes resources, Vault, and Istio requests.</li>
            <li>Maintained documentation using MkDocs and Confluence.</li>
          </ul>
        </div>

        <div className="job">
          <h3>AWS DevOps Software Engineer - TSYS Global Payments</h3>
          <p><em>Alpharetta, GA | June 2021 - October 2022</em></p>
          <ul>
            <li>Designed and implemented continuous integration and continuous delivery (CI/CD) pipelines to enhance engineering efficiency.</li>
            <li>Provisioned production-ready AWS cloud infrastructure and microservices container orchestration (EKS) using CloudFormation Templates.</li>
            <li>Managed AWS services including VPC, EKS, EFS, EC2, ECS, S3, RDS, DynamoDB, Route 53, ELB, Auto-Scaling, SQS, SNS, CloudWatch, KMS, and IAM.</li>
            <li>Integrated Kubernetes with HashiCorp Vault for runtime application secrets management using init and sidecar injectors.</li>
            <li>Created reproducible builds of Kubernetes applications by managing Kubernetes manifest files and Helm packages.</li>
            <li>Integrated and managed AWS Service Catalog products for developer self-service deployments.</li>
            <li>Utilized Jenkins for CI/CD, deploying code to staging and production environments with multi-branch pipelines.</li>
            <li>Managed AWS Kafka consumer API with symmetric/asymmetric encryption for secure data transmission between consumers and producers.</li>
            <li>Handled keystore PK12 SSL and non-SSL trust store/keystore certificates.</li>
            <li>Developed Grafana dashboards to allow Cluster API monitoring.</li>
          </ul>
        </div>

        <div className="job">
          <h3>AWS/GCP Cloud Engineer - Object Computing, Inc.</h3>
          <p><em>Saint Louis, MO | March 2019 - May 2021</em></p>
          <ul>
            <li>Designed and implemented CI/CD pipelines using Jenkins and GitLab CI/CD.</li>
            <li>Managed Infrastructure as Code (IaC) with Terraform and CloudFormation for cloud resource provisioning, including EC2 instances, S3 buckets, and RDS databases.</li>
            <li>Managed AWS services such as VPC, EC2, ECS, S3, RDS, DynamoDB, EFS, Route53, ELB, Auto-Scaling, SQS, SNS, CloudWatch, KMS, and IAM.</li>
            <li>Configured and managed Docker and Kubernetes containerization platforms, including Docker images and Kubernetes resources.</li>
            <li>Utilized monitoring and logging tools like Prometheus, Grafana, ELK Stack, and AWS CloudWatch.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software releases.</li>
          </ul>
        </div>

        <div className="job">
          <h3>DevOps Engineer - Unigo Inc.</h3>
          <p><em>Irving, Texas | April 2018 - March 2019</em></p>
          <ul>
            <li>Automated release pipeline for zero-touch deployment using Jenkins, Bitbucket, and JFrog.</li>
            <li>Assisted developers with establishing branching and labeling conventions.</li>
            <li>Deployed artifacts to JFrog Artifactory using Maven dependency management.</li>
            <li>Configured CloudBees Enterprise Jenkins for CI automation and managed plugins, security, and master/worker configurations.</li>
            <li>Utilized Python and Bash scripting for automation tasks.</li>
            <li>Maintained a test environment for automation for QA, Product Management, and Product Support using IBM Cloud Services.</li>
            <li>Employed Docker containers for rapid deployment of Linux-based applications.</li>
            <li>Created and maintained Jenkins health reports and Confluence documentation.</li>
            <li>Utilized GSM and Remedy Smart IT for incident and change management.</li>
          </ul>
        </div>

      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Automated Deployment Framework:</strong> Developed a comprehensive deployment framework using Jenkins and Terraform, allowing teams to deploy applications across multiple environments with minimal manual intervention, resulting in a 50% reduction in deployment time.</li>
          <li><strong>Cloud Monitoring Solution:</strong> Designed and implemented a cloud monitoring solution using Prometheus and Grafana to monitor application performance and infrastructure health, leading to proactive issue resolution and improved uptime.</li>
          <li><strong>CI/CD for Microservices:</strong> Built a CI/CD pipeline for a microservices architecture using GitLab CI/CD and Docker, enabling automatic testing and deployment of services, which increased development speed by 40%.</li>
          <li><strong>Security Enhancement Project:</strong> Integrated HashiCorp Vault with Kubernetes to secure application secrets, ensuring compliance with security standards and minimizing the risk of data breaches.</li>
          <li><strong>Cost Optimization Strategy:</strong> Implemented cost monitoring tools and policies across AWS and GCP environments, achieving a 20% reduction in cloud expenditure by identifying and eliminating underutilized resources.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Bharath Madvar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
