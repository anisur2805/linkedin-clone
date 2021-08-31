import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./widgets.css";

const useStyles = makeStyles((theme) => ({
	root: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(0),
		fontWeight: 600,
		fontSize: 14,
	},
	heading: {
		fontSize: 20,
		fontWeight: 600,
	},
	desc: {
		color: "#afafaf",
		fontSize: 14,
		lineHeight: 1.3,
	},
	iconSize: {
		fontSize: 15,
		color: "#777",
	},
}));

export default function Widgets() {
	const classes = useStyles();
	const WidgetsNewsArticle = (heading, subtitle) => {
		return (
			<div className="widgets__news">
				<div className="widgets__news_leftSide">
					<FiberManualRecord className={classes.iconSize} />
				</div>
				<div className="widgets__news_rightSide">
					<Typography
						variant="h6"
						className={`truncate ${classes.root}`}>
							<Tooltip title={heading} arrow>
								<span>{heading}</span>
							</Tooltip>
					</Typography>
					<Typography className={classes.desc}>{subtitle}</Typography>
				</div>
			</div>
		);
	};
	return (
		<div className="widgets">
			<div className="widgets__header">
				<Typography variant="h2" className={classes.heading}>
					LinkedIn News
				</Typography>
				<Info />
			</div>
			{WidgetsNewsArticle(
				"Accessibility",
				"In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme."
			)}
			{WidgetsNewsArticle(
				"Theme",
				"The Typography component uses the variantMapping property to associate a UI variant with a semantic element. It's important to realize that the style of a typography is independent from the semantic underlying element."
			)}
			{WidgetsNewsArticle(
				"Changing the semantic element",
				"You can change the underlying element for a one time occasion with the component property"
			)}
		</div>
	);
}
