import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
<header className="header">
  <h1>Bharath M</h1>
  <p>Senior Software Engineer</p>
  <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bharath-madvar-230a03271/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
</header>

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
          <li><strong>CLOUD:</strong> AWS, GCP, Azure</li>
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
    <h3>Senior Software Engineer .</h3>
    <h3>
    <strong>Employer: Lowe’s, Charlotte, NC.
    <span style={{ float: 'right' }}>October 2022 - Present</span>
    </strong>
    </h3>
    <p>The primary objective of this project is to enhance Lowe’s 
     cloud infrastructure on Google Cloud Platform (GCP) to achieve improved scalability,reliability, security, and cost efficiency. 
     In addition, the project aims to implement a robust Continuous Integration/Continuous Deployment (CI/CD) pipeline that streamlines software development processes, accelerates deployment times, and reduces operational costs, 
     all while maintaining high standards of professionalism and best practices.</p>
          <ul>
          <li>Engineered and implemented a robust, highly available, and fault-tolerant Kubernetes infrastructure on Google Cloud Platform (GCP) from the ground up, utilizing technologies such as Akamai, GLB, F5, and Palo Alto VM series.</li>
          <li>Developed and maintained automation scripts in Shell and Python to enhance pre- and post-development processes.</li>
          <li>Configured GCP services, including Google API's, IAM/MFA policies, VPCs, subnets, Compute Engine, Storage, Networking, GCS buckets, and GKE clusters using Terraform for Infrastructure as Code (IaC).</li>
          <li>Integrated Istio Gateway to enable dynamic routing and load balancing, facilitating large-scale application deployments.</li>
          <li>Managed the lifecycle of self-service deployments for developers by implementing a LEC with Loci templates.</li>
          <li>Implemented certificate management using Venafi Trust Protection Platform (TPP) and Venafi as a Service (VaaS), integrated with cert-manager.</li>
          <li>Managed Vault OIDC for secret policies and path-based configuration tied to GCP service accounts.</li>
          <li>Developed custome Helm templates for Spinnaker pipelines, security webhooks, and integrated Vault and Forseti security tools with JFrog Artifactory.</li>
          <li>Visualized security data with Forseti, integrating its scanner, inventory, explanation, and notifier modules with GCP Cloud SQL.</li>
          <li>Automated CI/CD processes using Spinnaker to support continuous delivery of new application versions.</li>
          <li>Utilized network analysis tools such as Wireshark, Tcpdump, and hey tool to troubleshoot and resolve networking issues.</li>
          <li>Developed Grafana dashboards to monitor Kubernetes resources, Vault performance, Istio traffic, and GLB latency errors.</li>
          <li>Maintained comprehensive documentation using MkDocs and Confluence.</li>
          </ul>
      </div>

        <div className="job">
          <h3>Senior AWS/DevOps Engineer.</h3>
          <h3>
            <strong>Employer: Global Payments, Alpharetta, GA .
            <span style={{ float: 'right' }}>June 2021 - October 2022</span>
            </strong>
        </h3>
        <p>The key goal of this project is to modernize and optimize Global Payments' cloud infrastructure on AWS(Amazon Web Service) to support the high-volume demands of financial transactions, 
          ensuring unparalleled scalability, enhanced reliability, and fortified security.The entire project will adhere strictly to financial industry regulations, such as PCI DSS, 
          and be executed with the highest standards of security and performance critical to a payment processing environment.</p>
          <ul>
            <li>Designed and implemented continuous integration and continuous delivery (CI/CD) pipelines to enhance engineering efficiency.</li>
            <li>Provisioned production-ready AWS cloud infrastructure and microservices container orchestration (EKS) using CloudFormation Templates.</li>
            <li>Employed Terraform to automate provisioning of AWS infrastructure including IAM roles, service accounts, node pools, autoscaling policies, and EKS configurations.</li>
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
  <h3>Cloud Infrastructure Engineer</h3>
  <h3>
    <strong>
      Employer: Object Computing, Inc., Saint Louis, Missouri.
      <span style={{ float: 'right' }}> March 2018 - May 2021</span> </strong>
      </h3>
    <p>As a Cloud Infrastructure Engineer at Object Computing, Inc., I successfully managed and optimized cloud environments for multiple high-profile clients, including Boeing and the North Dakota Department of Health. My role involved leveraging Infrastructure as Code (IaC) principles, implementing CI/CD pipelines, and orchestrating containerization strategies, 
      all while ensuring compliance and enhancing operational efficiency.</p>
  <h3 style={{ marginTop: '10px' }}>
    <strong>Clients: Boeing</strong>
  </h3>
  <ul>
    <li>Managed Infrastructure as Code (IaC) using CloudFormation Templates for provisioning and automating AWS resources, ensuring consistent and repeatable environments while reducing manual intervention.</li>
    <li>Utilized CloudFormation to define, deploy, and update infrastructure stacks, enhancing scalability, resource tracking, and version control for infrastructure deployments.</li>
    <li>Configured and managed Docker images for containerization on Elastic Kubernetes Service (EKS), overseeing both Docker cosmos image creation and Kubernetes resource management.</li>
    <li>Created monitoring Grafana dashboards for all production clusters by integrating cluster API.</li>
    <li>Collaborated with cross-functional teams to deliver high-quality software releases.</li>
  </ul>

  <h3 style={{ marginTop: '10px' }}>
    <strong>North Dakota Department of Health</strong>
  </h3>
  <ul>
    <li>Constructed and installed servers through Azure Resource Manager (ARM) Templates or Azure Portal.</li>
    <li>Developed and designed Azure DevOps pipeline to manage resources across multiple subscriptions in Azure.</li>
    <li>Provisioned servers/instances using infrastructure as code such as Terraform and CloudFormation, with code stored in a private repository and constantly updated.</li>
    <li>Integrated Docker container orchestration framework using Kubernetes by creating pods, Config Maps, and deployments.</li>
    <li>Used Splunk APM for log aggregation and analysis on different application servers, integrating Splunk with Single Sign-On authentication and ServiceNow ticketing tool.</li>
  </ul>
</div>
   <div className="job">
        <h3>DevOps Engineer</h3>
        <h3>
        <strong>Employer: Mastercard Inc, O'Fallon, Missouri.
            <span style={{ float: 'right' }}> April 2017 - March 2018</span>
            </strong>
          </h3>
          <ul>
          <li>Automated CI/CD pipelines for zero-touch deployments using Jenkins, Bitbucket, and JFrog Artifactory, significantly reducing manual intervention.</li>
          <li>Deployed artifacts to JFrog Artifactory using Maven and managed dependencies for multiple environments.</li>
          <li>Configured CloudBees Enterprise Jenkins for CI automation, managing plugins, security, and master-slave configurations.</li>
          <li>Maintained and managed test environments across IBM Cloud services, supporting QA, Product Management, and Product Support.</li>
          <li>Deployed and managed Linux-based applications using Docker for rapid and scalable development environments.</li>
          <li>Utilized GSM and Remedy Smart IT for effective incident and change management.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
