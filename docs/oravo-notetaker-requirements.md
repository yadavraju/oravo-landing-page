# Oravo Notetaker product requirements

Status: review draft

## Product promise under review

After a meeting transcript is ready, Oravo Notetaker should process a one-hour transcript and generate a structured meeting summary in about 30 seconds.

This is a target experience, not yet an unqualified public performance claim. Before launch, test the complete production path and report p50/p95 processing time, failure rate, transcript size, language, speaker count, summary settings, model/version, and test dates.

## Core user job

Help a participant leave a meeting with an inspectable source record and a follow-up plan without waiting for slow post-processing or manually reconstructing decisions.

## Required outputs

- searchable transcript with speaker labels and timestamps
- summary with decisions, risks, and open questions
- action items with owner, due-date field, and supporting transcript evidence
- links from generated claims back to transcript moments
- editable output and export/share controls
- visible processing state, elapsed time, and completion receipt

## Performance acceptance

- target: about 30 seconds from a ready one-hour transcript to a generated summary
- measure p50, p95, failure rate, and retry rate
- verify on representative meeting lengths, speaker counts, accents, languages, and transcript quality
- never count transcript capture time inside the processing benchmark unless the claim explicitly says so
- do not publish the target as a universal promise until the benchmark passes

## Privacy and consent gates

Exact recording, consent, retention, model-training, enterprise-control, and security claims remain blocked on current product/legal facts. The page must not inherit competitor claims or imply certifications.

## Measurement

- `notetaker_landing_view`
- `notetaker_interest_click`
- future product events: upload started, processing started/completed/failed, summary viewed, transcript evidence opened, action exported, follow-up generated

Properties should include product, page variant, transcript duration bucket, processing duration, language, speaker-count bucket, model version, acquisition source, and failure reason where relevant.

## Competitive pattern used as inspiration

Wispr Flow Notetaker presents a dedicated product within a broader voice suite, emphasizes accurate details, workflow fit, multiple meeting sources, AI connections, migration, team controls, social proof, FAQs, and cross-sell back to dictation. Oravo should use the product-family clarity and workflow storytelling pattern without copying its words, layout, testimonials, privacy claims, or feature scope.

Source reviewed September 19, 2026: https://wisprflow.ai/notetaker
