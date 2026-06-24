---
title: "First-Party Analytics Pipeline"
description: "Building a governed analytics pipeline for mayoracek.com with Astro, Server GTM and BigQuery."
pubDate: "Jun 24 2026"
heroImage: "/social_img.webp"
badge: "BUILDING IN PUBLIC"
tags:
  - "Analytics Engineering"
  - "Server GTM"
  - "BigQuery"
---

Most analytics implementations begin with a reporting interface. For
mayoracek.com, I wanted to begin one layer deeper: with reliable raw evidence.

The website is becoming a small public analytics laboratory built around a
simple architecture:

**Astro and GitHub Pages → custom tracker → Server GTM → BigQuery**

The objective is not merely to count page views. I want to understand how
people discover the site, which topics create genuine interest, which articles
lead to GitHub repositories and which journeys result in meaningful actions.

## Why build a custom pipeline?

Tools such as GA4 are useful, but they also bring predefined concepts,
interfaces and attribution rules.

For this project, I want full visibility into:

- how an event is created
- how anonymous visitors and sessions are identified
- how events are ordered
- how duplicates are detected
- how traffic-source evidence is preserved
- how conversions are defined
- how raw data becomes a trusted analytical fact

The result should be understandable from the browser request all the way to the
final BigQuery model.

## Event identity

Every event belongs to a clear hierarchy:

- `visitor_id` represents an anonymous browser
- `session_id` represents one visit
- `page_view_id` represents one page instance
- `event_id` represents one event occurrence
- `event_sequence_number` preserves event order inside the session
- `page_view_sequence_number` shows the page position in the session
- `page_event_sequence_number` orders interactions on the page

Two genuine clicks receive different event IDs. A technical retry keeps the
same event ID, allowing the warehouse to remove duplicates without deleting
real repeated behaviour.

## More than generic clicks

The system will not treat every interaction as an anonymous `click`.

An event can describe:

- the action that occurred
- the entity involved
- the page and component that produced it
- the source evidence for the session
- the visitor's position in the journey
- whether the action represents meaningful intent

A GitHub repository click can therefore be connected to the specific article,
project, traffic source and page view that generated it.

## Traffic-source evidence

UTM parameters are only one source signal.

The tracker will preserve:

- referrer URL and domain
- session landing page
- first landing page
- UTM parameters
- Google, Microsoft and social click identifiers
- direct and internal navigation evidence

BigQuery will then classify sessions into explainable channels such as organic
search, referral, organic social, paid search, email and direct traffic.

For search queries and impressions, the system can later join website behaviour
with Google Search Console data.

## From raw events to decisions

The raw event table is only the first layer.

The analytical pipeline will eventually produce:

- clean and deduplicated events
- page-view facts
- session facts
- visitor journeys
- traffic-source attribution
- content and project performance
- conversion paths
- data-quality monitoring
- AI-assisted weekly insights

The questions I want to answer are practical:

- Which content creates real technical interest?
- Which articles lead to GitHub repository visits?
- Which traffic sources bring valuable visitors?
- Which project areas are gaining attention?
- Which pages become dead ends?
- What should I build or write next?

This project is being built in public as both a working analytics system and an
exploration of what a more transparent, explainable analytics platform could
look like.
