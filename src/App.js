// src/App.js

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
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile/">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Bharath420">Bharath420</a></p>
      </section>

      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Cloud & DevOps Engineer with 8 years of experience leading a dedicated team that specializes in tool building, Kubernetes administration in Docker EE, CI/CD pipeline design and support, monitoring, application administration, and container platform design and administration. Complex problem-solver with an analytical and driven mindset. Holding Terraform and Kubernetes Admin Certification.
        </p>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>CLOUD - AWS, GCP</li>
          <li>Infrastructure as code: Terraform, CloudFormation</li>
          <li>Operating Systems: Linux (Red Hat, CentOS & SUSE), Ubuntu, HPUX, Windows</li>
          <li>Scripting: Shell Scripting, Groovy, Python, Ruby, Perl, and PowerShell</li>
          <li>Build Tools: Maven, Gradle, Sonar, Nexus, and Ant</li>
          <li>Version Control Tools: GIT, GITHUB, GitLab, Subversion (SVN), and Bitbucket</li>
          <li>Orchestration Tools: Kubernetes, Docker Swarm, and Google Cloud Engine</li>
          <li>Networking Protocols: TCP/IP, DNS, DHCP, Cisco Routers/Switches, WAN, LAN, SMTP</li>
          <li>Monitoring Tools: Nagios, AWS CloudWatch, Splunk, and ELK</li>
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
            <li>Implemented a production-ready, load-balanced, highly available, fault-tolerant, GCP Kubernetes infrastructure from scratch using Akamai, GLB, F5, and Palo Alto application VMS.</li>
            <li>Developed, maintained, and enhanced post and pre-development scripts using Shell and Python.</li>
            <li>Managed and configured the GCP Service account, IAM policies, Google Cloud Virtual Private Cloud (VPC), subnets, Compute, Storage, Networking, GCS buckets, GKE using Terraform as Infrastructure as code.</li>
            <li>Created dynamic routing/load balancing capability by enabling large application scaling, using Istio-gateway serves gateway.</li>
            <li>Developed and managed the LEC with Loci template to perform end-to-end self-service deployments to the developers.</li>
          </ul>
        </div>
        {/* Add more jobs as needed */}
        
        <div className="job">
          <h3>AWS DevOps Software Engineer - TSYS Global Payments</h3>
          <p><em>Alpharetta, GA | June 2021 - October 2022</em></p>
          <ul>
            <li>Worked on building the engineering efficiency initiatives and will design & implement continuous integration, continuous delivery pipelines.</li>
            <li>Provisioned a production-ready AWS cloud infrastructure and microservices container orchestration (EKS) using Cloud Formation Template (CFT).</li>
            <li>Managed Amazon Web Services like VPC, EKS, EFS Storages, EC2, ECS, S3, RDS, DynamoDB, Route53, ELB, Auto-Scaling, SQS, SNS, CloudWatch, KMS, IAM, AWS gateways through AWS Console/CLI.</li>
            <li>Integrated Kubernetes with HasicorpVault to write the application secrets and configuration file at runtime for k8s service using init and sidecar injectors between the applications.</li>
            <li>Created reproducible builds of the Kubernetes applications by managing Kubernetes manifest files and releases of Helm packages.</li>
          </ul>
        </div>

        {/* Add more jobs as needed */}
      </section>

      <footer>
        <p>Created with React | © Bharath Madvar</p>
      </footer>
    </div>
  );
}

export default App;
