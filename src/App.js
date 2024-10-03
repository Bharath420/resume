import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Bharath Madvar</h1>
        <p>Cloud & DevOps Engineer</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Email:</strong> bharathmadvar@gmail.com</li>
          <li><strong>Phone:</strong> 732-783-8757</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bharath-madvar-230a03271/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        </ul>
      </section>

    <section className="professional-summary">
    <h2>Professional Summary</h2>
    <p>
    Cloud & DevOps Engineer with 8 years of experience leading a dedicated team specializing in tool building, 
    Kubernetes administration in Docker EE, CI/CD pipeline design and support, monitoring, application 
    administration, and container platform design and administration. A complex problem-solver with an analytical 
    and driven mindset, holding Terraform and Kubernetes Admin Certification.
    </p>
    </section>

      <section className="technical-skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>CLOUD:</strong> AWS, GCP</li>
          <li><strong>Infrastructure as Code:</strong> Terraform, CloudFormation</li>
          <li><strong>Operating Systems:</strong> Linux (Red Hat, CentOS, SUSE), Ubuntu, HPUX, Windows</li>
          <li><strong>Scripting:</strong> Shell Scripting, Groovy, Python, Ruby, Perl, PowerShell</li>
          <li><strong>Build Tools:</strong> Maven, Gradle, Sonar, Nexus, Ant</li>
          <li><strong>Version Control Tools:</strong> GIT, GitHub, GitLab, Subversion (SVN), Bitbucket</li>
          <li><strong>Orchestration Tools:</strong> Kubernetes, Docker Swarm, Google Cloud Engine</li>
          <li><strong>Networking Protocols:</strong> TCP/IP, DNS, DHCP, Cisco Routers/Switches, WAN, LAN, SMTP</li>
          <li><strong>Monitoring Tools:</strong> Nagios, AWS CloudWatch, Splunk, ELK</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p><strong>Master’s in Computer Science and Web Development Technology</strong> - Wilmington University, New Castle, DE | 2017</p>
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
        <h3>Software Engineer DevOps/GCP</h3>
        <h3><strong>Employer:Lowe’s,Charlotte,NC</strong></h3>
        <h3><span> October 2022 - Present</span></h3>
          <ul>
            <li>Implemented a production-ready, load-balanced, highly available, fault-tolerant GCP Kubernetes infrastructure from scratch using Akamai, GLB, F5, and Palo Alto application VMS.</li>
            <li>Developed, maintained, and enhanced post and pre-development scripts using Shell and Python.</li>
            <li>Managed and configured GCP service accounts, IAM policies, Google Cloud VPC, subnets, Compute, Storage, Networking, GCS buckets, and GKE using Terraform as Infrastructure as Code.</li>
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
          <h3>
          <p> AWS DevOps Software Engineer
          <span>TSYS Global Payments, Alpharetta, GA | June 2021 - October 2022</span> </p> </h3>
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
        <h3><p>AWS/GCP Cloud Engineer at <span>Object Computing, Inc., Saint Louis, MO | March 2019 - May 2021</span> </p></h3>
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
          <h3>DevOps Engineer</h3>
          <span>Unigo Inc., Irving, Texas | April 2018 - March 2019</span>
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
        <p>Details about your projects can go here.</p>
      </section>
    </div>
  );
}

export default App;
