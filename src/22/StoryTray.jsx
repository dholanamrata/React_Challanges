export default function StoryTray({ stories }) {
    const createStoryPlaceholder = stories.find(story => story.id === "create");
  
    if (!createStoryPlaceholder) {
      stories.push({
        id: "create",
        label: "Create Story"
      });
    }  
   
    return (
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.label}</li>
        ))}
      </ul>
    );
  }
  