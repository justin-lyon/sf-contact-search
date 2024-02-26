sf org create scratch --definition-file config/project-scratch-def.json --alias contact-search --set-default
sf project deploy start --source-dir force-app
sf org assign permset --name Contact_Search_User
sf data import tree --plan data/Account-Contact.plan.json