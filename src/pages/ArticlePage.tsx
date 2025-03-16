
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock articles data - in a real app, this would come from an API
  const articles = [
    {
      id: '1',
      title: 'Political Landscape Shifts Following Latest Elections',
      slug: 'political-landscape-elections',
      excerpt: 'Analysis of recent election results and what they signal for upcoming policy decisions and governance.',
      content: `
        <p>The political landscape is undergoing significant changes following the recent elections, with implications that extend across various sectors of governance and policy-making.</p>
        
        <p>Analysts are closely examining voting patterns, demographic shifts, and the emergence of new political alliances that could reshape the direction of both domestic and international policies in the coming years.</p>
        
        <h2>Key Takeaways from Election Results</h2>
        
        <p>Several noteworthy trends have emerged from the election data:</p>
        
        <ul>
          <li>Increased voter turnout among younger demographics</li>
          <li>Shifts in traditionally consistent voting blocs</li>
          <li>The impact of economic concerns on voter decisions</li>
          <li>The role of social media and digital campaigning</li>
        </ul>
        
        <p>Political experts suggest that these changes may require a recalibration of policy priorities, particularly in areas such as economic development, environmental regulation, and social services.</p>
        
        <h2>Implications for Upcoming Legislative Sessions</h2>
        
        <p>As newly elected officials prepare to take office, there is considerable speculation about the legislative agenda for the upcoming session. Priority areas likely to receive attention include:</p>
        
        <ol>
          <li>Infrastructure investment and modernization</li>
          <li>Healthcare accessibility and affordability</li>
          <li>Educational reform and funding</li>
          <li>Climate policy and environmental protection measures</li>
        </ol>
        
        <p>The composition of key committees and leadership positions will be closely watched as indicators of where legislative focus may be directed.</p>
        
        <h2>International Relations Perspective</h2>
        
        <p>Beyond domestic considerations, the election results may also signal shifts in international relations and diplomatic approaches. Trading partners and allies are assessing potential changes in foreign policy stances, trade agreements, and security commitments.</p>
        
        <p>Diplomatic observers note that transitions in political leadership often present both challenges and opportunities for reshaping international engagements and addressing global challenges.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630&q=80',
      publishedAt: new Date('2023-10-08'),
      readTime: 5,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
        title: 'Political Correspondent'
      }
    },
    {
      id: '2',
      title: 'New Bill Proposes Changes to Environmental Regulations',
      slug: 'new-bill-environmental-regulations',
      excerpt: 'Lawmakers debate the implications of a new bill that would reshape environmental policy across the nation.',
      content: `
        <p>A newly proposed bill aims to significantly reshape environmental regulations, sparking intense debate among lawmakers, industry representatives, and environmental advocacy groups.</p>
        
        <p>The legislation, formally titled the "Environmental Standards and Innovation Act," introduces a comprehensive framework that would modify existing regulations while establishing new guidelines for environmental protection and sustainable development.</p>
        
        <h2>Core Provisions of the Proposed Bill</h2>
        
        <p>The bill contains several key provisions that would impact various sectors:</p>
        
        <ul>
          <li>Revised emissions standards for manufacturing and energy production</li>
          <li>New incentives for renewable energy implementation</li>
          <li>Modified requirements for environmental impact assessments</li>
          <li>Updated water protection guidelines</li>
          <li>Streamlined permitting processes for certain development projects</li>
        </ul>
        
        <p>Proponents argue that these changes will modernize outdated regulations while balancing environmental protection with economic growth considerations.</p>
        
        <h2>Reactions from Stakeholders</h2>
        
        <p>The proposed legislation has elicited varied responses from different stakeholders:</p>
        
        <p><strong>Industry Representatives:</strong> Many business leaders have expressed support for aspects of the bill that simplify compliance procedures and provide greater regulatory certainty. However, some have raised concerns about potential implementation costs.</p>
        
        <p><strong>Environmental Organizations:</strong> Several environmental groups have criticized the bill, arguing that it weakens critical protections. Others have acknowledged positive elements while pushing for stronger provisions in specific areas.</p>
        
        <p><strong>Local Governments:</strong> State and municipal authorities have highlighted the importance of maintaining flexibility for regional implementation while ensuring consistent national standards.</p>
        
        <h2>Legislative Outlook</h2>
        
        <p>The bill faces a complex legislative journey ahead, with committee hearings scheduled in the coming weeks. Analysts predict substantial amendments before any final vote, with particular attention focused on provisions related to climate change measures and enforcement mechanisms.</p>
        
        <p>Bipartisan negotiations are underway to address concerns from moderate lawmakers on both sides of the aisle, with the bill's sponsors expressing optimism about reaching a compromise that can garner sufficient support for passage.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630&q=80',
      publishedAt: new Date('2023-09-28'),
      readTime: 6,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
        title: 'Environmental Policy Analyst'
      }
    },
    {
      id: '3',
      title: 'The Future of Sustainable Energy: Breakthroughs in Renewable Resources',
      slug: 'future-sustainable-energy',
      excerpt: 'Recent advancements in renewable energy technologies are changing how we think about sustainability.',
      content: `
        <p>The landscape of renewable energy is experiencing a transformative period, with recent technological breakthroughs promising to reshape our approach to sustainable power generation and storage.</p>
        
        <p>These innovations come at a critical time as countries worldwide intensify efforts to reduce carbon emissions and transition toward cleaner energy sources.</p>
        
        <h2>Solar Technology Advancements</h2>
        
        <p>The solar energy sector has seen remarkable progress in both efficiency and cost-effectiveness:</p>
        
        <ul>
          <li>New photovoltaic materials achieving conversion efficiencies exceeding 25%</li>
          <li>Bifacial solar panels that capture light reflected off surfaces, increasing energy yield by up to 30%</li>
          <li>Integration of artificial intelligence for optimized solar tracking and maintenance</li>
          <li>Development of transparent solar cells that can be applied to windows and building facades</li>
        </ul>
        
        <p>These advancements are dramatically reducing the cost per kilowatt-hour of solar-generated electricity, making it increasingly competitive with fossil fuel sources even without subsidies.</p>
        
        <h2>Wind Energy Innovation</h2>
        
        <p>Similarly, wind power technologies have evolved substantially:</p>
        
        <p>Offshore wind farms are being developed with increasingly larger turbines, some exceeding 15 megawatts in capacity. These massive structures can power thousands of homes from a single unit.</p>
        
        <p>Floating wind platforms now enable wind farm development in deeper waters, vastly expanding potential installation sites and accessing stronger, more consistent wind patterns.</p>
        
        <p>Advanced materials science has yielded lighter, stronger blade designs that improve efficiency while reducing manufacturing and transportation costs.</p>
        
        <h2>Energy Storage Breakthroughs</h2>
        
        <p>Perhaps the most significant developments are occurring in energy storage:</p>
        
        <ul>
          <li>Next-generation battery chemistries that offer higher energy density at lower costs</li>
          <li>Grid-scale storage solutions incorporating diverse technologies from flow batteries to compressed air</li>
          <li>Thermal storage systems that convert excess electricity to heat, which can be stored more economically than electrical energy</li>
          <li>Green hydrogen production as a means of long-term energy storage</li>
        </ul>
        
        <p>These storage technologies address one of renewable energy's principal challenges: the intermittent nature of wind and solar generation.</p>
        
        <h2>Economic and Policy Implications</h2>
        
        <p>The accelerating pace of innovation has profound implications for energy markets and policy frameworks. Many analysts now project that renewable sources will become the dominant form of new energy capacity worldwide by the end of the decade.</p>
        
        <p>This transition presents both challenges and opportunities for existing energy providers, grid operators, and regulatory bodies. Policymakers are increasingly focused on developing frameworks that facilitate integration of these new technologies while ensuring system reliability and equitable access.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630&q=80',
      publishedAt: new Date('2023-10-15'),
      readTime: 8,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
      author: {
        name: 'Elena Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
        title: 'Renewable Energy Correspondent'
      }
    },
    {
      id: '4',
      title: 'Virtual Reality in Education: Transforming Learning Experiences',
      slug: 'vr-education-transformation',
      excerpt: 'How VR technology is being implemented in classrooms to create immersive educational experiences.',
      content: `
        <p>Virtual Reality (VR) is rapidly transforming educational environments, offering unprecedented opportunities for immersive, experiential learning across a wide range of subjects and educational levels.</p>
        
        <p>From primary schools to universities and professional training programs, VR technology is being integrated into curricula to enhance student engagement and improve learning outcomes.</p>
        
        <h2>Applications Across Disciplines</h2>
        
        <p>VR implementations in education span diverse subject areas:</p>
        
        <ul>
          <li><strong>Science:</strong> Students can explore molecular structures, conduct virtual dissections, or journey through the human circulatory system</li>
          <li><strong>History:</strong> Learners can walk through ancient civilizations, witness historical events, or explore archaeological sites</li>
          <li><strong>Geography:</strong> Virtual field trips allow visits to remote locations, observation of geographic features, and exploration of different ecosystems</li>
          <li><strong>Literature:</strong> Immersive experiences enable students to step into settings from classic and contemporary works</li>
          <li><strong>Technical Training:</strong> Hands-on practice in simulated environments for medicine, engineering, and vocational education</li>
        </ul>
        
        <p>These applications demonstrate VR's versatility across the educational spectrum, from abstract concepts to practical skills development.</p>
        
        <h2>Benefits and Outcomes</h2>
        
        <p>Research on VR in educational settings has identified several significant advantages:</p>
        
        <p><strong>Enhanced Engagement:</strong> Studies consistently report higher levels of student interest and motivation when learning incorporates VR experiences.</p>
        
        <p><strong>Improved Retention:</strong> The immersive nature of VR appears to strengthen memory formation, with students demonstrating better recall of material experienced through virtual environments.</p>
        
        <p><strong>Accessibility:</strong> VR can make otherwise inaccessible experiences available to all students, regardless of geographic or economic limitations.</p>
        
        <p><strong>Customization:</strong> Learning experiences can be tailored to individual needs, allowing students to progress at their own pace and focus on areas requiring additional attention.</p>
        
        <h2>Implementation Challenges</h2>
        
        <p>Despite its promise, educational institutions face several challenges in adopting VR technology:</p>
        
        <ul>
          <li>Equipment costs and technical infrastructure requirements</li>
          <li>Teacher training and professional development needs</li>
          <li>Curriculum integration and alignment with educational standards</li>
          <li>Potential physical side effects for some users</li>
        </ul>
        
        <p>These obstacles are gradually being addressed through decreasing hardware costs, expanded teacher preparation programs, and growing libraries of educational VR content aligned with curricular objectives.</p>
        
        <h2>Future Directions</h2>
        
        <p>The educational applications of VR continue to evolve, with several emerging trends shaping future development:</p>
        
        <p>Collaborative virtual environments are enabling students in different locations to interact within shared spaces, fostering teamwork and cross-cultural exchange.</p>
        
        <p>Adaptive learning systems are incorporating artificial intelligence to customize VR experiences based on student performance and learning styles.</p>
        
        <p>Content creation tools are becoming more accessible, allowing educators and students to develop their own virtual environments and experiences.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630&q=80',
      publishedAt: new Date('2023-10-05'),
      readTime: 4,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
      author: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
        title: 'Education Technology Analyst'
      }
    },
    {
      id: '5',
      title: 'Global Markets React to Latest Economic Policy Shifts',
      slug: 'global-markets-economic-policy',
      excerpt: 'Financial experts analyze the implications of new economic policies on global markets and investment strategies.',
      content: `
        <p>Global financial markets are responding to significant economic policy changes announced by major economies, with investors carefully adjusting strategies amid shifting conditions.</p>
        
        <p>The policy adjustments, which include modifications to interest rates, fiscal spending plans, and regulatory frameworks, are creating both challenges and opportunities across different market sectors and regions.</p>
        
        <h2>Central Bank Policy Developments</h2>
        
        <p>Recent monetary policy decisions have been particularly influential:</p>
        
        <ul>
          <li>Several major central banks have adjusted interest rate trajectories in response to persistent inflation concerns</li>
          <li>Diverging policy paths between developed and emerging economies are creating currency valuation shifts</li>
          <li>Forward guidance language has been carefully recalibrated, impacting market expectations for future actions</li>
          <li>Balance sheet management strategies are evolving as quantitative easing programs are reassessed</li>
        </ul>
        
        <p>These monetary developments are occurring against a backdrop of changing fiscal policy approaches, creating a complex interplay that market participants must navigate.</p>
        
        <h2>Market Sector Impacts</h2>
        
        <p>The policy shifts are affecting market sectors differently:</p>
        
        <p><strong>Banking and Financial Services:</strong> Higher interest rate environments are improving net interest margins for many institutions, though concerns about loan quality persist in some regions.</p>
        
        <p><strong>Technology:</strong> Growth-oriented technology companies are adjusting to higher capital costs and changing consumer spending patterns influenced by broader economic conditions.</p>
        
        <p><strong>Energy:</strong> Policy changes related to both traditional and renewable energy are reshaping investment flows and corporate strategies across the sector.</p>
        
        <p><strong>Consumer Goods:</strong> Companies are navigating changing consumption patterns as households respond to inflation and interest rate changes.</p>
        
        <h2>Regional Market Performance</h2>
        
        <p>Market responses have varied significantly by region:</p>
        
        <p>North American markets have demonstrated resilience despite policy tightening, supported by strong labor markets and corporate earnings.</p>
        
        <p>European exchanges are contending with energy security concerns alongside monetary policy adjustments from the European Central Bank.</p>
        
        <p>Asian markets show divergent performance, with export-oriented economies particularly sensitive to global demand fluctuations and currency movements.</p>
        
        <p>Emerging markets face unique challenges, as policy changes in advanced economies impact capital flows, currency stability, and financing conditions.</p>
        
        <h2>Investment Strategy Adaptations</h2>
        
        <p>Financial advisors and institutional investors are recalibrating approaches in response to these developments:</p>
        
        <ul>
          <li>Asset allocation models are being adjusted to reflect changing risk profiles across equity and fixed income markets</li>
          <li>Duration management in bond portfolios has taken on increased importance in the face of yield curve shifts</li>
          <li>Sector rotation strategies are being implemented to capitalize on changing economic conditions</li>
          <li>Defensive positioning has increased in some portfolios, with greater emphasis on quality and dividend stability</li>
        </ul>
        
        <p>The diversity of strategies reflects both the uncertainty created by policy transitions and the varied opportunities that emerge during periods of market adjustment.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630&q=80',
      publishedAt: new Date('2023-10-12'),
      readTime: 6,
      categories: [{ id: '2', name: 'Business', slug: 'business' }],
      author: {
        name: 'Robert Winters',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
        title: 'Financial Markets Analyst'
      }
    },
  ];
  
  // Find the article with the matching slug
  const article = articles.find(a => a.slug === slug);
  
  // Format date
  const formattedDate = article?.publishedAt ? new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(article.publishedAt instanceof Date ? article.publishedAt : new Date(article.publishedAt)) : '';
  
  // Share article functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      })
      .catch((error) => {
        console.error('Error sharing:', error);
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  // Fallback for browsers that don't support navigator.share
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this article with others.",
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {article ? (
          <article className="page-container">
            {/* Back button */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            </div>
            
            {/* Article header */}
            <header className="mb-10">
              {article.categories.length > 0 && (
                <Badge variant="secondary" className="mb-4">
                  {article.categories[0].name}
                </Badge>
              )}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={article.author?.avatar} 
                      alt={article.author?.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{article.author?.name}</p>
                    <p className="text-sm text-muted-foreground">{article.author?.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {article.readTime} min read
                  </span>
                  <Button variant="ghost" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only md:ml-2">Share</span>
                  </Button>
                </div>
              </div>
            </header>
            
            {/* Featured image */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Article content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </article>
        ) : (
          <div className="page-container py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Article not found</h2>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or may have been removed.
            </p>
            <Button onClick={() => navigate('/')}>
              Return to homepage
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
