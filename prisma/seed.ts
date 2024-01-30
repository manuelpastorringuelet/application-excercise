import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const NUM_BLOG_POSTS = 15;

async function seedBlogPosts() {
  try {
    for (let i = 0; i < NUM_BLOG_POSTS; i++) {
      await prisma.blogPost.create({
        data: {
          title: faker.lorem.sentence({ min: 1, max: 10 }),
          content: faker.lorem.paragraphs({ min: 1, max: 12 }),
          createdAt: faker.date.past({ years: 10 }),
        },
      });
    }
  } catch (error) {
    console.error("Error creating blog post:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedBlogPosts()
  .then(() => console.log("Seeding complete!"))
  .catch((error) => console.error(error));
