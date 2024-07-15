export default {
	"**.{js|ts|cjs|mjs|d.cts|d.mts|jsx|tsx|json|jsonc}": [
		"biome check --write --no-errors-on-unmatched",
		"biome check --write --organize-imports-enabled=false --no-errors-on-unmatched",
		"biome check --write --unsafe --no-errors-on-unmatched",
		"biome format --write --no-errors-on-unmatched",
		"biome lint --write --no-errors-on-unmatched",
	],
};
