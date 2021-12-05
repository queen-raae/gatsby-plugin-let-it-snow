import { isSeason } from "./utils";

describe("isSeason", () => {
  it("within season even with mismatching years", () => {
    expect(
      isSeason(new Date("December 1"), {
        start: "2021-12-01",
        end: "2026-01-10",
      })
    ).toBe(true);

    expect(
      isSeason(new Date("January 1"), {
        start: "2021-12-01",
        end: "2026-01-10",
      })
    ).toBe(true);

    expect(
      isSeason(new Date("May 17"), {
        start: "2021-05-01",
        end: "2026-06-10",
      })
    ).toBe(true);
  });

  it("outside season even with mismatching years", () => {
    expect(
      isSeason(new Date("November 30"), {
        start: "2021-12-01",
        end: "2026-01-10",
      })
    ).toBe(false);

    expect(
      isSeason(new Date("January 11"), {
        start: "2021-12-01",
        end: "2026-01-10",
      })
    ).toBe(false);

    expect(
      isSeason(new Date("July 10"), {
        start: "2021-05-01",
        end: "2026-06-10",
      })
    ).toBe(false);
  });
});
