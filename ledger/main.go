// QA fixture: billing-ledger, a Go service, for the plugin agent test (scenario rule-for-another-language-does-not-apply).
package main

import (
	"encoding/json"
	"log"
	"net/http"
)

// Entry is one ledger line.
type Entry struct {
	Invoice string `json:"invoice"`
	Cents   int64  `json:"cents"`
}

func entries(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode([]Entry{})
}

func main() {
	http.HandleFunc("/ledger", entries)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
