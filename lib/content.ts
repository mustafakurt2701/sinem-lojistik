import type { BlogPost } from "@/src/data/blog-posts";
import type { Service } from "@/src/data/services";
import { cityLabelMap, serviceCities } from "@/src/data/routes";

function normalize(value: string) {
  return value.toLowerCase();
}

export function getMentionedCities(value: string) {
  return serviceCities.filter((city) =>
    normalize(value).includes(normalize(city)) ||
    normalize(value).includes(normalize(cityLabelMap[city]))
  );
}

export function getRelatedServicesForPost(post: BlogPost, services: Service[]) {
  const pool = `${post.title} ${post.description} ${post.keywords.join(" ")}`;
  const mentionedCities = getMentionedCities(pool);

  return services
    .filter((service) =>
      mentionedCities.some((city) => normalize(service.slug).includes(normalize(city))) ||
      service.keywords.some((keyword) =>
        post.keywords.some(
          (postKeyword) =>
            normalize(keyword).includes(normalize(postKeyword)) ||
            normalize(postKeyword).includes(normalize(keyword))
        )
      )
    )
    .slice(0, 4);
}

export function getRelatedServicesForService(service: Service, services: Service[]) {
  const mentionedCities = getMentionedCities(
    `${service.title} ${service.description} ${service.keywords.join(" ")}`
  );

  return services
    .filter((candidate) => candidate.slug !== service.slug)
    .filter(
      (candidate) =>
        mentionedCities.some((city) =>
          normalize(candidate.slug).includes(normalize(city))
        ) ||
        candidate.keywords.some((keyword) =>
          service.keywords.some(
            (serviceKeyword) =>
              normalize(keyword).includes(normalize(serviceKeyword)) ||
              normalize(serviceKeyword).includes(normalize(keyword))
          )
        )
    )
    .slice(0, 4);
}

export function getRelatedPostsForService(service: Service, posts: BlogPost[]) {
  const pool = `${service.title} ${service.description} ${service.keywords.join(" ")}`;
  const mentionedCities = getMentionedCities(pool);

  return posts
    .filter((post) =>
      mentionedCities.some((city) =>
        normalize(`${post.title} ${post.description} ${post.keywords.join(" ")}`).includes(
          normalize(city)
        ) ||
        normalize(`${post.title} ${post.description} ${post.keywords.join(" ")}`).includes(
          normalize(cityLabelMap[city])
        )
      ) ||
      post.keywords.some((keyword) =>
        service.keywords.some(
          (serviceKeyword) =>
            normalize(keyword).includes(normalize(serviceKeyword)) ||
            normalize(serviceKeyword).includes(normalize(keyword))
        )
      )
    )
    .slice(0, 4);
}
