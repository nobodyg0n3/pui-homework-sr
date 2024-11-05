<mark>**Note that this document order from FP4 -> FP1**</mark>


## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?   
* Who is the target audience?  
* What information do you convey with your website?   
* How is it interesting and engaging? 

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type. Click on X on page Y / scroll on page X, etc.  
2. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of tool1  
   * Why did you choose to use it over other alternatives? (2 sentences max)  
   * How you used it? (2 sentences max)  
   * What does it add to your website? (2 sentences max)  
2. Name of tool2

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Tool1 | Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool1 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |
| Tool2| Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool2 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1: 
  2. Tool2:

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: this tool once suggested … and I adjusted my design according to the suggestion because … 
  2. Tool2: 
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: this tool once suggested … but I modified/rejected the suggestion because … 
  2. Tool2: 


> Pros and cons of using GenAI tools
* Pros
  1. Tool1: 
  2. Tool2:
* Cons
  1. Tool1: 
  2. Tool2:


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

This portfolio website aims to present a fun yet professional image, showcasing my background in Human-Computer Interaction (HCI) and Information Systems (IS). Balancing creativity with professionalism, the portfolio will feature both software development and design elements, creating a dynamic user experience that reflects my dual expertise in technical and creative fields.


## High-Fi Prototypes

### *Prototype 1*

![Protype 1 Home Page](images/prototypes/p1.png)

Prototype 1 features the initial layout for the home page, which introduces the user to my profile and professional background. The main feedback highlighted a need for enhanced visual contrast and simplified navigation, especially for users unfamiliar with HCI and IS concepts.Everything is block based so based on filters, it will dynamically change the projects page based on interest.


### *Prototype 2*

![Protype 2 Home Page](images/prototypes/p2.png)
The second idea is a closer example to a combination of ideas. In comparison to p1, it has increased color variability, reorganized project sections, and added filtering options for an enhanced user experience. 

## Usability Test

I conducted four user tests with participants from diverse backgrounds: one recruiter, one designer, one software engineer, and one individual unaffiliated with similar fields. The testing involved a think-aloud protocol, allowing users to express their thoughts while interacting with the portfolio. The main focus areas included locating the resume, navigating through projects, and finding the "About" section.

**General Findings:**

1. **Toggle and Filter Changes**: Feedback regarding the toggle feature was mixed. Some users suggested that I might benefit from reverting to a simpler toggle between software and design sections. However, others encouraged the addition of more filtering options for better project categorization. As a result, I am considering implementing a flexible filtering system that allows users to switch perspectives while also providing tags for finer categorization.

2. **Contrast and Visual Design**: Participants mentioned that enhancing the contrast between different elements of the design could improve readability. This feedback is vital for ensuring that all users, including those with visual impairments, can navigate the site comfortably. I plan to conduct a thorough review of color choices and contrast levels to enhance the overall visual accessibility of the portfolio.

3. **Guidance with Buttons**: Users indicated that the use of buttons to guide navigation was beneficial, as it provided clear calls to action throughout the site. This input has encouraged me to further develop button placements and styles, ensuring they effectively lead users through the portfolio's sections without overwhelming them.

4. **Resume Page Testing**: The need for additional testing on the resume page was highlighted. Participants expressed uncertainty about the best format for presenting my resume, indicating that further feedback could clarify user preferences. I plan to engage additional testers to evaluate different formats, ensuring the resume page aligns with user expectations and is easily accessible.

5. **Sidebar Navigation**: Lastly, users recommended adding a “Home” link to the sidebar for easier navigation. This simple addition will provide users with a quick way to return to the homepage from any section of the portfolio, enhancing the overall user experience.


The testing results have provided me with crucial insights into improving my portfolio's design and functionality. By addressing the feedback regarding toggles, contrast, navigation buttons, resume presentation, and sidebar options, I can create a more user-friendly experience that effectively showcases my work and skills.


## Updated Designs

Based on user feedback, the updated designs feature more detailed project cards that highlight key aspects of each project. Visual cues have been incorporated to guide users intuitively through the timeline and toggle functionalities, improving usability across various devices. I have reverted to the original toggle design instead of a filter, although this may still evolve based on further feedback. Additionally, I've implemented tags and shortened descriptions for individual projects to enhance clarity and facilitate quicker understanding of my work. These changes aim to create a more engaging and user-friendly experience for visitors to my portfolio.

![Updated design of Home Page](images/Prototypes/Updated%20design%20about%20me.png)

![Updated design of About Page](images/Prototypes/Updated%20design%20about%20me.png)


## Feedback Summary

During the lab session, my peers and instructors provided valuable feedback on improving the website’s functionality and aesthetics. They praised its clean design and intuitive navigation, recognizing these qualities as important for user engagement and a professional feel. However, they suggested some changes to enhance the user experience, especially within the project section. One of the primary suggestions was to add more concise information on project cards, allowing users to quickly grasp the nature of each project without having to click through each one individually. This would help communicate the range and depth of my work more effectively, especially for first-time visitors who may only scan the page initially.

Additionally, feedback emphasized the need for an improved information hierarchy in the project section. They recommended reorganizing elements so that key details, such as project type, tools used, or specific outcomes, stand out more prominently. Given my background spanning multiple disciplines, they advised integrating a tagging system for the project cards. Tags would provide an at-a-glance overview of my skills, helping users understand the diversity in my portfolio. For example, tags such as "machine learning," "design," "education," "project management," and "policy" could clearly highlight the multifaceted nature of my expertise, allowing viewers to filter and explore the areas that interest them most.

The toggle or filter feature received positive reactions as an effective way to distinguish between software and design projects, but opinions were mixed on its implementation. Some suggested using a tag-based filter to allow users to refine results based on specific categories or themes, while others advocated for a more prominent toggle that would switch between broader sections of software and design. This feedback has helped me realize the importance of optimizing the feature for usability, leading me to consider a hybrid approach. I am now inclined to prioritize a tag-based filter for its flexibility while retaining the toggle feature to give users a quick way to shift focus between my software and design work.

Another valuable piece of advice was to create a more immersive experience when navigating between the different roles I have held, particularly by emphasizing the diverse nature of my work in project management, design, software, and policy. This could be achieved through thoughtful design choices in the navigation flow, guiding users seamlessly as they explore the portfolio. My peers also suggested reducing the length of project descriptions, as users are often looking for quick insights rather than detailed text. 

This feedback has encouraged me to focus on an accessible, clear information hierarchy, paired with an engaging, user-friendly filtering system. This approach will enhance the portfolio’s structure, allowing viewers to understand my diverse skill set and experience without feeling overwhelmed.

## Milestones

Here is the weekly implementation plan to ensure steady progress until the end of the semester:

### *Implementation Plan*

- **Week 9 (Oct 28 - Nov 1)**
  - [X] FP1 due
  - [X] Start working on prototype 1 & 2
  - [X] Start collecting key infomfation
  - [X] User Test

- **Week 10 (Nov 4 - Nov 8)**
  - [X] FP2 due
  - [X] Build basic website (basic pages, html, etc)
  - [X] User Test
  - [ ] Add information hierarchy improvements to project section

- **Week 11 (Nov 11 - Nov 15)**
  - [ ] FP3 due 
  - [ ] Implement updated design for project cards with additional details
  - [ ] Test and refine toggle accessibility

- **Week 12 (Nov 18 - Nov 22)**
  - [ ] Begin mobile responsiveness adjustments
  - [ ] Conduct further user testing on updated features

- **Week 13 (Nov 25 - Nov 29)**
  - [ ] Thanksgiving Break
  - [ ] Refine Website, focus on increasing accessibility score

- **Week 14 (Dec 2 - Dec 6)**
  - [ ] FP4 due
  - [ ] Finalize color contrast and readability improvements

### *Libraries and Other Components*

The following libraries and components will be used in the project:
- **jQuery** for DOM manipulation
- **Animate.css** for simple hover effects
- **AOS (Animate on Scroll)** for scroll animations


## Generative AI Use Plan

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.
 
 * ChatGPT: 
    - I plan to use ChatGPT to help brainstorm, revise basic writing content, and generate code snippets for simpler components. It will not be used for final code testing or debugging, as direct, context-specific solutions require hands-on coding and testing.
  * GitHub Copilot:
    -  Useful for autocomplete in code, Copilot will assist in speeding up coding, especially for repetitive tasks and initial scaffolding. However, it won’t be relied upon for critical design decisions or complex interactions, as these need custom solutions aligned with user feedback.

### *Responsible Use*

How would you use Generative AI responsibly? 

I will use Generative AI responsibly by verifying all code suggestions and ideas to ensure they align with project requirements. Additionally, I'll avoid over-relying on AI for testing or debugging, as these need a human touch to ensure quality and usability. For language revisions, I will always have it revise text I have already written, rather than generate new text.
---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

**Main goal:**  
The goal is to create a clean, smooth portfolio that balances minimalism with functionality. The primary focus is on accessibility—allowing users to navigate the site using just the keyboard while also offering interactive features like a live signature overlay on the profile picture.

**Interactivity and Engagement:**  
Interactive pieces, such as hover effects and subtle animations, will make the design more engaging. The homepage sketch emphasizes clarity with large text and visual hierarchy, while the live signature feature adds a personal touch.

**Accessibility:**  
Large-sized text will be used for readability, with a color scheme that prioritizes contrast (black and white with green accents) to assist users with visual impairments. Keyboard navigation and screen-reader compatibility will be incorporated to enhance usability for a wider audience.

**Concerns:**  
Ensuring the website is responsive and retains its usability on different screen sizes, especially for the homepage, remains a concern. Compatibility across different browsers could introduce complexity in terms of both design and functionality.


### *Idea 2*

**Main goal:**  
This portfolio focuses on presenting a fun yet professional image, highlighting a background in HCI (Human-Computer Interaction) and Information Systems (IS). The portfolio is intended to reflect creativity without compromising on professionalism.

**Interactivity and Engagement:**  
The portfolio sketches show a dynamic project section with potential timeline-based navigation for the project history. Interactive elements will include hover effects, with sections designed to captivate the user as they explore the content. Furthermore, blurred spheres that potentially move throughout the screen (or everything is blurred before scroll, allowing a gradient).

**Accessibility:**  
A key focus will be making the timeline navigation user-friendly for everyone, including those using assistive technologies. While keyboard navigation should work well overall, there may be concerns when distinguishing between scrolling through the timeline and selecting a specific project. To address this, I'll ensure that the timeline is navigable with clear visual cues and proper labels for screen readers. Additional accessibility features, such as clear text, well-contrasted colors, and intuitive navigation paths, will be implemented to create a seamless experience for all users.


**Concerns:**  
The primary concern is ensuring the timeline-based navigation on the project page is intuitive and easy to use. There may be potential issues with distinguishing between selecting a project and scrolling through the timeline, especially for users relying on keyboard navigation or assistive technologies. Another concern is making sure the overall navigation flows smoothly without overwhelming users with too many interactive elements, while still maintaining a professional and polished look.


### *Idea 3*

**Main goal:**  
This portfolio focuses on blending both software development and design skills into one cohesive platform. It has a modern-design feel as well as "more techy" aspects such as a typing animation on the home page. The goal is to allow users to explore both areas independently, yet in an integrated manner, through an interactive toggle system. This toggle will showcase the duality of my expertise without overwhelming the user, providing a clear distinction between technical and creative work while maintaining a unified aesthetic.

**Interactivity and Engagement:**  
The key interactive feature is the toggle between the software and design sections. This toggle will allow users to switch perspectives easily, engaging them with different facets of my work. Additional interactive elements, such as animated transitions and dynamic project displays, will help keep users engaged as they navigate through the portfolio.

**Accessibility:**  
Ensuring that the toggle functionality and all interactive features are fully accessible is a priority. The design will focus on keyboard navigation and screen reader compatibility, ensuring that users with disabilities can explore both the software and design sections effortlessly. Clear visual cues, intuitive navigation, and responsive design will help ensure accessibility across different devices and platforms.

**Concerns:**  
The biggest concern is maintaining a balance between functionality and complexity in the toggle feature. While the toggle provides an engaging experience, it must remain intuitive and not confuse users. Ensuring that the design is cohesive across both sections while highlighting their differences is also a challenge. There is a need to make transitions smooth and ensure all elements are easily accessible, especially for users relying on assistive technologies.

## Feedback Summary

During the lab session, my peers and instructors highlighted that merging Ideas 2 and 3 could create a more cohesive and impactful portfolio experience. They appreciated the distinct toggle between software and design work in Idea 2, which aligns well with my dual background in Human-Computer Interaction (HCI) and Information Systems (IS). This feature offers an effective way to display both skill sets, providing a professional touch while maintaining a lively, engaging style. Integrating this toggle as a primary navigation element would strengthen my portfolio’s ability to cater to different viewer interests without overwhelming the design.

The floating resume page was also well-received for its interactivity and visual appeal, though feedback suggested it might be more beneficial to use the timeline feature here. By doing so, I could guide users through my career progression in a more narrative format, enhancing usability and clarity. While this feature is engaging, I understand that my portfolio must prioritize ease of navigation, so I'm rethinking its necessity and will consider a structured timeline approach to ensure users can easily access my experiences.

Accessibility was another key point, particularly regarding complex navigation on the project and timeline pages. My peers recommended focusing on making the experience intuitive rather than striving for complete accessibility perfection across every component from the outset. Rather than ensuring all aspects are immediately accessible in the same way, I can focus on getting continuous feedback to improve accessibility incrementally, balancing practicality with usability.

They also shared some ideas on color schemes that maintain strong contrast while adding vibrancy. My goal is to incorporate more color while still prioritizing legibility and readability, especially for those with visual impairments. Using teal, black, grey, and white is one potential direction that ensures enough contrast while giving the design a modern feel.


## Feedback Digestion

Reflecting on the feedback, my focus is now on merging Ideas 2 and 3 to create a well-rounded portfolio that showcases my HCI and IS background effectively. By keeping the toggle feature between software and design work, I can present both fields distinctly, supporting a dynamic user experience that’s professional yet engaging.

I’ve decided to approach the resume page based on a balance of simplicity and ambition. I found it challenging to get specific feedback on which resume format to choose, as my peers seemed indecisive and only responded when I asked direct questions. Given the limited guidance, I’ll aim for an MVP approach with a simple PDF hyperlink initially, which aligns with the standard setup on many portfolio sites. However, my goal is to develop this further into an animated resume with an option to download, offering an engaging yet practical overview of my experiences. This will be explored more throughout the development process and testing.

For the "About" page, I plan to expand beyond the typical image and brief intro commonly seen on other portfolios. This page offers an opportunity to provide a more comprehensive view of my background, particularly my leadership experiences. For instance, I can highlight my work in advancing CS Equity and accessibility, which led to a letter of recognition from Kamala Harris. The inclusion of such experiences will make the "About" page more meaningful, showing not only my skills but my commitments and the impact of my work.

Accessibility remains a critical focus, but I understand now that trying to make every element perfectly accessible immediately may not be feasible. Instead, I’ll focus on practical, high-impact improvements and continuously seek feedback to refine the design as I go. This will allow me to address the needs that most affect usability while balancing the ambition of my design. This makes me more confident in achieving a high quality combination of idea 2 and 3.

Finally, I’ll use more color while keeping contrast strong. A palette of teal, black, grey, and white achieves the modern, clean look I’m aiming for while ensuring readability and visual appeal. This feedback has clarified my approach to combining design elements with accessible, responsive, and interactive features, prioritizing both engagement and usability for a wide audience.
