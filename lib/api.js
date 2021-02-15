async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      // variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPreviewProjectBySlug(slug) {
  const data = await fetchAPI(
    `
  query ProjectBySlug($where: JSON) {
    projects(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  );
  return data?.projects[0];
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      projects {
        slug
      }
    }
  `);
  return data?.projects;
}

export async function getAllProjectsForHome() {
  const data = await fetchAPI(
    `
    query Projects($where: JSON){
      projects(limit: 10, where: $where) {
        title
        slug
        excerpt
        coverImage {
          formats
        }
        author {
          name
          picture {
            formats
          }
        }
      }
    }
  `
  );
  console.log("data : ", data);
  return data?.projects;
}

export async function getProjectAndMoreProjects(slug, preview) {
  const data = await fetchAPI(
    `
  query ProjectBySlug($where: JSON, $where_ne: JSON) {
    projects(where: $where) {
      title
      slug
      content
      ogImage: coverImage{
        url
      }
      coverImage {
        formats
      }
      author {
        name
        picture {
          formats
        }
      }
    }
    moreProjects: projects(limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      coverImage {
        formats
      }
      author {
        name
        picture {
          formats
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: "published" }),
        },
        where_ne: {
          ...(preview ? {} : { status: "published" }),
          slug_ne: slug,
        },
      },
    }
  );
  return data;
}
