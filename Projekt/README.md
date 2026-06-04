# Aplikacja To-Do (Lista Zadań)

## Spis treści
1. [O projekcie](#o-projekcie)
2. [Funkcjonalności](#funkcjonalności)
3. [Instrukcja obsługi i uruchomienia](#instrukcja-obsługi-i-uruchomienia)
    * [Wymagania wstępne](#wymagania-wstępne)
    * [Instalacja paczek](#instalacja-paczek)
    * [Uruchomienie serwera deweloperskiego](#uruchomienie-serwera-deweloperskiego)

---

## O projekcie
Projekt zaliczeniowy wykonany w technologii Angular (wersja Standalone). Aplikacja służy do wygodnego zarządzania codziennymi zadaniami, oferując pełen cykl życia zadań oraz zaawansowaną walidację wprowadzanych danych. Aplikacja przechowuje dane lokalnie w przeglądarce użytkownika, co pozwala na zachowanie ciągłości pracy bez konieczności stawiania zewnętrznej bazy danych.


---

## Funkcjonalności
Zarządzanie zadaniami: Możliwość dodawania nowych zadań, przeglądania szczegółów, edycji oraz usuwania.

Podział na kategorie: Wykaz zadań aktywnych oraz osobna zakładka dla zadań oznaczonych jako ukończone.

Zaawansowana walidacja formularzy:
  - Blokowanie dodawania pustych zadań (wymagany tytuł).
  - Walidacja daty (blokada wyboru dat z przeszłości).
  - Określanie priorytetów zadań (niski, średni, wysoki) za pomocą przejrzystego formularza.

Trwałość danych: Automatyczny zapis i odczyt stanu listy zadań z pamięci podręcznej przeglądarki `localStorage` – dane nie znikają po odświeżeniu strony (F5).

Responsywny interfejs:
 - Wygląd aplikacji dostosowuje się do ekranów komputerów oraz urządzeń mobilnych.

---

## Instrukcja obsługi i uruchomienia

### Wymagania wstępne
Do uruchomienia projektu wymagane jest posiadanie zainstalowanego środowiska **Node.js** oraz narzędzia **Angular CLI**.

### Instalacja paczek
Po sklonowaniu repozytorium należy otworzyć terminal w głównym folderze projektu (tam, gdzie znajduje się plik `package.json`) i zainstalować wszystkie wymagane zależności (paczki) za pomocą komendy:
```bash
npm install
```
### Uruchomienie serwera deweloperskiego
Komenda:
```bash
ng serve
```