import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase", () => ({
  createClient: vi.fn(),
}));

import {
  getProfile,
  getExperiences,
  getProjects,
  getSkillCategories,
  getEducations,
  getCertificates,
} from "./api";
import { createClient } from "@/lib/supabase";

function createChain(result: { data: unknown; error: unknown }) {
  return {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    order: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue(result),
    then: (resolve: (value: unknown) => void) => resolve(result),
  };
}

function mockSuccess(data: unknown) {
  const chain = createChain({ data, error: null });
  (createClient as ReturnType<typeof vi.fn>).mockReturnValue(chain);
  return chain;
}

function mockError() {
  const chain = createChain({ data: null, error: new Error("DB error") });
  (createClient as ReturnType<typeof vi.fn>).mockReturnValue(chain);
  return chain;
}

function mockThrow() {
  (createClient as ReturnType<typeof vi.fn>).mockImplementation(() => {
    throw new Error("Connection failed");
  });
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("getProfile", () => {
  it("returns fallback profile on error", async () => {
    mockError();
    const profile = await getProfile();
    expect(profile.name).toBe("Dimas Eka Mahendra Karsoma");
    expect(profile.title).toBe("Fullstack Engineer");
  });

  it("returns fallback profile when Supabase throws", async () => {
    mockThrow();
    const profile = await getProfile();
    expect(profile.name).toBe("Dimas Eka Mahendra Karsoma");
  });

  it("maps DB fields to Profile type on success", async () => {
    mockSuccess({
      name: "Test User",
      title: "Developer",
      short_summary: "Short bio",
      long_bio: "Long bio",
      location: "City",
      phone: "+123",
      email: "test@test.com",
      linked_in: "https://linkedin.com/in/test",
      github: "https://github.com/test",
      website: "https://test.com",
      photo_url: "/photo.jpg",
      resume_url: "/resume.pdf",
      availability: "open",
    });
    const profile = await getProfile();
    expect(profile.name).toBe("Test User");
    expect(profile.shortSummary).toBe("Short bio");
    expect(profile.linkedIn).toBe("https://linkedin.com/in/test");
    expect(profile.photo).toBe("/photo.jpg");
  });

  it("calls createClient", async () => {
    mockSuccess({ name: "X", title: "Y", short_summary: "", long_bio: "", location: "", phone: "", email: "", linked_in: "", github: "", availability: "open" });
    await getProfile();
    expect(createClient).toHaveBeenCalledOnce();
  });
});

describe("getExperiences", () => {
  it("returns fallback experiences on error", async () => {
    mockError();
    const exps = await getExperiences();
    expect(exps.length).toBeGreaterThan(0);
    expect(exps[0].id).toBe("astra-life");
  });

  it("returns fallback experiences when Supabase throws", async () => {
    mockThrow();
    const exps = await getExperiences();
    expect(exps.length).toBeGreaterThan(0);
  });
});

describe("getProjects", () => {
  it("returns fallback projects on error", async () => {
    mockError();
    const projects = await getProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].id).toBe("homespot-web");
  });

  it("returns fallback projects when Supabase throws", async () => {
    mockThrow();
    const projects = await getProjects();
    expect(projects.length).toBeGreaterThan(0);
  });
});

describe("getSkillCategories", () => {
  it("returns fallback categories on error", async () => {
    mockError();
    const cats = await getSkillCategories();
    expect(cats.length).toBeGreaterThan(0);
    expect(cats[0].id).toBe("frontend");
  });

  it("returns fallback categories when Supabase throws", async () => {
    mockThrow();
    const cats = await getSkillCategories();
    expect(cats.length).toBeGreaterThan(0);
  });
});

describe("getEducations", () => {
  it("returns empty array on error", async () => {
    mockError();
    const edus = await getEducations();
    expect(edus).toEqual([]);
  });

  it("returns empty array when Supabase throws", async () => {
    mockThrow();
    const edus = await getEducations();
    expect(edus).toEqual([]);
  });
});

describe("getCertificates", () => {
  it("returns fallback certificates on error", async () => {
    mockError();
    const certs = await getCertificates();
    expect(certs.length).toBeGreaterThan(0);
    expect(certs[0].id).toBe("solids");
  });

  it("returns fallback certificates when Supabase throws", async () => {
    mockThrow();
    const certs = await getCertificates();
    expect(certs.length).toBeGreaterThan(0);
  });
});
