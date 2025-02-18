import * as stylex from "@stylexjs/stylex";
import { motion } from "motion/react";
import { Text } from "@fractal/ui-emotion";
import React from "react";
type MainProps = {
	title: string;
	description: string;
	subDescription: string;
	navButtonText: string;
	items: Array<{ title: string; description: string }>;
};

export function Main({ title, description, subDescription, navButtonText, items }: MainProps) {
	return (
		<section {...stylex.props(styles.root)}>
			<div style={{ position: "relative", height: "60vh" }}>
				<div
					style={{
						position: "absolute",
						backgroundColor: "#111111",
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						zIndex: -10,
					}}
				/>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 0, transition: { duration: 2, delay: 12 } }}
				>
					<Text
						typography="title-xxl-medium"
						color="primary"
					>
						{title}
					</Text>
					<Text
						typography="title-l-medium"
						color="primary"
					>
						{description}
					</Text>
					<Text
						typography="text-m"
						color="primary"
					>
						{subDescription}
					</Text>
				</motion.div>
			</div>

			<section {...stylex.props(styles.cardRoot)}>
				{items.map(({ title, description }) => (
					<article
						{...stylex.props(styles.card)}
						key={title}
					>
						<div {...stylex.props(styles.cardTitle)}>{title}</div>
						<p
							{...stylex.props(styles.cardDescription)}
							dangerouslySetInnerHTML={{ __html: formatCodeBlocks(description) }}
						></p>
					</article>
				))}
			</section>
		</section>
	);
}

const styles = stylex.create({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	title1: {
		display: "flex",
		flexDirection: {
			default: "row",
			"@media (max-width: 800px)": "column",
		},
		lineHeight: 1,
		gap: {
			default: 12,
			"@media (max-width: 800px)": 4,
		},
		textAlign: "center",
		fontSize: {
			default: 80,
			"@media (max-width: 800px)": 60,
		},
		fontWeight: 700,
		zIndex: 10,
		textShadow: "1px 1px 0 rgba(0, 0, 0, 0.1), -1px 1px 0 rgba(0, 0, 0, 0.1), 1px -1px 0 rgba(0, 0, 0, 0.1), -1px -1px 0 rgba(0, 0, 0, 0.1)",
	},
	title2: {
		fontSize: {
			default: 60,
			"@media (max-width: 800px)": 40,
		},
		fontWeight: 700,
	},
	navigation: {
		padding: "12px 28px",
		borderRadius: 8,
		backgroundColor: "rgb(0, 162, 255)",
		fontSize: 16,
		fontWeight: 700,
		textDecoration: "none",
	},
	cardRoot: {
		flexDirection: {
			default: "row",
			"@media (max-width: 800px)": "column",
		},
		maxWidth: 1440,
		padding: "66px 16px",
		display: "flex",
		margin: "auto",
		gap: 32,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		gap: 12,
		flex: 1,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: 700,
	},
	cardDescription: {
		fontSize: 16,
		fontWeight: 500,
		whiteSpace: "pre-line",
	},
});

const CodeBlockClassName = "nextra-code";

const escapeHtml = (text: string) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

const backtickToCodeBlock = (text: string) => text.replace(/`([^`]+)`/g, `<code class="${CodeBlockClassName}">$1</code>`);

const formatCodeBlocks = (desc: string) => backtickToCodeBlock(escapeHtml(desc));
