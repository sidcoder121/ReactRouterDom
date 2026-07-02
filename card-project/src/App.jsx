import Card from './components/Card.jsx'

export const App = () => {

  const jobOpenings = [
  {
    companyName: "Google",
    brandLogo: "https://logo.clearbit.com/google.com",
    datePosted: "2 days ago",
    post: "Senior Software Engineer, Cloud Infrastructure",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "85", // in dollars per hour
    location: "Mumbai, India"
  },
  {
    companyName: "Meta",
    brandLogo: "https://logo.clearbit.com/meta.com",
    datePosted: "5 days ago",
    post: "Data Scientist, Product Analytics",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "70",
    location: "Mumbai, India"
  },
  {
    companyName: "Amazon",
    brandLogo: "https://logo.clearbit.com/amazon.com",
    datePosted: "1 week ago",
    post: "Cloud Support Associate",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "35",
    location: "Mumbai, India"
  },
  {
    companyName: "Microsoft",
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    datePosted: "3 days ago",
    post: "AI/ML Research Intern",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: "45",
    location: "Mumbai, India"
  },
  {
    companyName: "Apple",
    brandLogo: "https://logo.clearbit.com/apple.com",
    datePosted: "6 days ago",
    post: "Operations Lead, Apple Retail",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "90",
    location: "Mumbai, India"
  },
  {
    companyName: "Netflix",
    brandLogo: "https://logo.clearbit.com/netflix.com",
    datePosted: "2 weeks ago",
    post: "Content Engineering Specialist",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "75",
    location: "Mumbai, India"
  },
  {
    companyName: "Adobe",
    brandLogo: "https://logo.clearbit.com/adobe.com",
    datePosted: "4 days ago",
    post: "Frontend Developer (React)",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "40",
    location: "Mumbai, India"
  },
  {
    companyName: "Salesforce",
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    datePosted: "10 days ago",
    post: "Technical Account Manager",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "80",
    location: "Mumbai, India"
  },
  {
    companyName: "Uber",
    brandLogo: "https://logo.clearbit.com/uber.com",
    datePosted: "1 week ago",
    post: "Product Manager, Mobility Solutions",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "65",
    location: "Mumbai, India"
  }
]

  return (
    <div className="parent">
      {jobopenings.map(function(elem){
        return <Card
          companyName={elem.companyName}
          brandLogo={elem.brandLogo}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      })}
    </div>
  )
}

export default App