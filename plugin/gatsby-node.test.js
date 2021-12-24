// This is an example using Jest (https://jestjs.io/)
import { testPluginOptionsSchema } from "gatsby-plugin-utils";
import { pluginOptionsSchema } from "./gatsby-node";

describe("pluginOptionsSchema", () => {
  it("allows no configuration", async () => {
    const { isValid } = await testPluginOptionsSchema(pluginOptionsSchema);
    expect(isValid).toBe(true);
  });

  describe("colors", () => {
    it("valid when array of strings", async () => {
      const options = {
        colors: ["#222"],
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("invalid when non array", async () => {
      const options = {
        colors: "#666",
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"colors" must be an array`]);
    });

    it("invalid when array of non strings", async () => {
      const options = {
        colors: [666],
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"colors[0]" must be a string`]);
    });
  });

  describe("intensity", () => {
    it("valid for: light", async () => {
      const options = {
        intensity: "light",
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("valid for: regular", async () => {
      const options = {
        intensity: "regular",
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("valid for: blizzard", async () => {
      const options = {
        intensity: "blizzard",
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("invalid for other string", async () => {
      const options = {
        intensity: "test",
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([
        `"intensity" must be one of [regular, light, blizzard]`,
      ]);
    });

    it("invalid for non string", async () => {
      const options = {
        intensity: 666,
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([
        `"intensity" must be one of [regular, light, blizzard]`,
        `"intensity" must be a string`,
      ]);
    });
  });

  describe("duration", () => {
    it("valid for int over 0", async () => {
      const options = {
        duration: 10,
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("valid for int string over 0", async () => {
      const options = {
        duration: "16",
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("invalid for int under 1", async () => {
      const options = {
        duration: 0,
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"duration" must be greater than or equal to 1`]);
    });

    it("invalid for float", async () => {
      const options = {
        duration: 3.4,
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"duration" must be an integer`]);
    });

    it("invalid for non int string", async () => {
      const options = {
        duration: "test",
      };
      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"duration" must be a number`]);
    });
  });

  describe("season", () => {
    it("valid for correct season", async () => {
      const options = {
        season: {
          start: "2021-12-04",
          end: new Date("January 4"),
        },
      };
      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    it("invalid for missing start/end", async () => {
      const options = {
        season: {},
      };

      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([
        `"season.start" is required`,
        `"season.end" is required`,
      ]);
    });

    it("invalid for non dates", async () => {
      const options = {
        season: {
          start: "test",
          end: "2013-13-01",
        },
      };

      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([
        `"season.start" must be a valid date`,
        `"season.end" must be a valid date`,
      ]);
    });
  });
});
