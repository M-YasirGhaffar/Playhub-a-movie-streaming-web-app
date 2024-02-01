import { z } from "zod";

// movie
export const getListSchema = z.object({
  type: z.enum(["POPULAR", "TOPRATED", "NOWPLAYING", "UPCOMING"]),
  page: z.number().default(1),
});

export const getDetailsSchema = z.object({
  movie_id: z.string(),
});

export const getSimilarSchema = z.object({
  movie_id: z.string(),
  page: z.number().default(1),
});

export const searchSchema = z.object({
  query: z.string(),
  page: z.number().default(1),
  year: z.number().optional(),
});

export const searchSchemaLocal = z.object({
  query: z.string().optional(),
});
