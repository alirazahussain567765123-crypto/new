// Fallback content for when markdown files can't be loaded
import { NewsArticle } from './newsLoader';
import { BlogArticle } from './blogLoader';

export const fallbackNewsArticles: NewsArticle[] = [
  {
    id: 'aramco-prequalified',
    title: "Saher's multiphase technology pre-qualified by Saudi Aramco",
    date: "2025-01-23",
    category: "Customer Validation",
    image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png",
    excerpt: "Historic milestone: Saher becomes the first GCC company to achieve Saudi Aramco pre-qualification for multiphase metering technology developed entirely within Saudi Arabia.",
    featured: true,
    slug: 'aramco-prequalified',
    content: `
      <p><strong>Saher is a technology company</strong> specializing in three-phase water-cut and multiphase flow metering solutions. Our innovative technology is being validated by a growing number of energy companies worldwide, underscoring its reliability and effectiveness.</p>
      
      <h2>Historic GCC Milestone</h2>
      <p>Notably, we are the <strong>first company in the GCC</strong> to have developed multiphase metering technology entirely within the Kingdom of Saudi Arabia. This distinction has made Saudi Aramco a particularly valued partner for Saher.</p>
      
      <p>Recently, we achieved a <strong>historic milestone</strong>: obtaining pre-qualification approval from Saudi Aramco, the world's largest oil and gas company.</p>
      
      <h2>Rigorous Testing at DNV</h2>
      <p>This approval followed <strong>rigorous blind flow loop trials</strong> conducted at DNV's state-of-the-art, third-party test facility in the Netherlands.</p>
      
      <h3>Testing Protocol</h3>
      <p>During these trials, conducted in collaboration with Saudi Aramco and DNV, Saher's multiphase meter was tested with various combinations of:</p>
      <ul>
        <li><strong>Oil flow rates</strong></li>
        <li><strong>Water flow rates</strong></li>
        <li><strong>Gas flow rates</strong></li>
      </ul>
      
      <h3>Technical Specifications</h3>
      <p>Adhering to Saudi Aramco's stringent engineering procedure, the meter's performance was compared to highly accurate reference measurements from DNV's flow loop.</p>
      
      <p><strong>Test Conditions:</strong></p>
      <ul>
        <li><strong>Fluids</strong>: Natural gas, synthetic oil (D-120), and brine</li>
        <li><strong>Pressure</strong>: 500 psi controlled environment</li>
        <li><strong>Duration</strong>: Five days of comprehensive testing</li>
        <li><strong>Analysis</strong>: Detailed data analytics considering reference equipment measurement uncertainties</li>
      </ul>
      
      <h2>Outstanding Results</h2>
      <p>The results demonstrated that <strong>Saher's multiphase meter performed within specifications</strong> in both:</p>
      <ul>
        <li>✅ <strong>Oil-continuous flow regions</strong></li>
        <li>✅ <strong>Water-continuous flow regions</strong></li>
      </ul>
      
      <p>This validation confirms our technology's reliability across the full spectrum of multiphase flow conditions encountered in real-world operations.</p>
    `
  },
  {
    id: 'successful-field-trial-noc',
    title: "Successful field trial in major NOC in the GCC region",
    date: "2024-09-15",
    category: "Customer Validation",
    image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555213/1725954027560-transformed-scaled_n7gle2.jpg",
    excerpt: "Our innovative compact, skid-mounted, non-radioactive Multiphase Flow Meter exceeded expectations, meeting and surpassing accuracy targets in direct comparison with portable test separators.",
    featured: false,
    slug: 'successful-field-trial-noc',
    content: `
      <p><strong>We are thrilled to announce</strong> that Saher Flow Solutions has successfully completed a field trial in collaboration with one of the major National Oil Companies (NOCs) in the GCC region.</p>
      
      <h2>Exceeding Expectations</h2>
      <p>Our innovative <strong>compact, skid-mounted, non-radioactive Multiphase Flow Meter (MPFM)</strong> exceeded expectations, meeting and surpassing the accuracy targets for:</p>
      <ul>
        <li>✅ <strong>Water-cut measurements</strong></li>
        <li>✅ <strong>Liquid flow rate measurements</strong></li>
      </ul>
      
      <h2>Rigorous Field Testing</h2>
      <p>This milestone trial was conducted in <strong>direct comparison with a portable test (liquid-gas) separator</strong>, where our MPFM delivered consistently reliable and accurate results.</p>
      
      <p>This achievement reinforces the capability of our technology to perform under demanding field conditions, offering a cutting-edge solution for multiphase flow measurement <strong>without the need for radioactive sources</strong>.</p>
    `
  }
];

export const fallbackBlogArticles: BlogArticle[] = [
  {
    id: 'future-of-multiphase-flow-measurement',
    title: "The Future of Multiphase Flow Measurement: AI and Digital Twin Technology",
    date: "2025-01-15",
    author: "Dr. Muhammad Akram Karimi",
    authorTitle: "Co-founder / CTO",
    authorImage: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Dr.Akram__wtiwxi.png",
    category: "Technology",
    tags: ["AI", "Digital Twin", "DMOR", "Innovation"],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Explore how artificial intelligence and digital twin technology are revolutionizing multiphase flow measurement, making it more accurate, efficient, and cost-effective than ever before.",
    readTime: "8 min read",
    featured: true,
    slug: 'future-of-multiphase-flow-measurement',
    content: `
      <p>The oil and gas industry is experiencing a technological revolution, and at the forefront of this transformation is the integration of <strong>artificial intelligence (AI)</strong> and <strong>digital twin technology</strong> in multiphase flow measurement.</p>
      
      <h2>The Challenge with Traditional Methods</h2>
      <p>For decades, the industry has relied on conventional multiphase flow meters that come with significant limitations:</p>
      
      <h3>🚫 Radioactive Sources</h3>
      <p>Traditional gamma-ray based meters pose safety risks and regulatory challenges, making international deployment complex and costly.</p>
      
      <h3>🔧 High Maintenance Requirements</h3>
      <p>Moving parts and intrusive sensors require frequent calibration and maintenance, leading to operational downtime.</p>
      
      <h2>Enter AI and Digital Twin Technology</h2>
      <p>At Saher Flow Solutions, we've developed a revolutionary approach that combines <strong>microwave sensing</strong> with <strong>AI-powered digital twin algorithms</strong> to overcome these traditional limitations.</p>
      
      <h3>What is a Digital Twin?</h3>
      <p>A digital twin is a virtual replica of a physical system that uses real-time data to mirror the behavior, characteristics, and performance of its physical counterpart.</p>
      
      <h2>Revolutionary DMOR Technology</h2>
      <p>Our <strong>Dual Mutually Orthogonal Resonator (DMOR)</strong> technology represents a breakthrough in microwave sensing with AI integration for unprecedented accuracy.</p>
    `
  }
];