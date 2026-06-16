# Strona główna

_Started 2026-05-21 13:09 UTC_

---

## User

Wrzucam plik design.md oraz podgląd obecnej strony. Odtwórz mi całą stronę główną w dokładnie takich samych stylach, układzie. Strona ma wyglądać 1:1.

## Assistant

_[tool: read_file]_

_[tool: view_image]_

_[tool: update_todos]_

Robię stronę. Email z domeny `auraflux.pl` — działam zgodnie z dostarczonym design.md i screenshotem (oryginalna marka klienta, 1:1 layout).

Plan:
- Manrope (heading) + Inter (body) + Instrument Serif (italic akcent „opieka")
- Czarno-biała paleta z #1F2124 jako dark surface
- Placeholdery dla brand logos i projektów (paski w stylu design system, bez rysowania cudzych marek SVG)
- Interaktywne FAQ akordeon, hover states, kliknięcia

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Gotowe — pełna strona główna `Auraflux Home.html` zbudowana 1:1 wg dostarczonego design.md i screenshotu.

Co zawiera:
- **Sticky nav** z logo `auraflux™`, menu (start/misja/usługi/projekty/opinie/kontakt) i ciemnym CTA „umów konsultację ↗"
- **Hero** — wielki Manrope z italicowym „opieka" (Instrument Serif), prawa kolumna z leadem, CTA „zobacz usługi ↓" i awatary „90+ Klientów"
- **Pasek marek** „zaufały nam takie marki jak" — placeholdery w stylu oryginału (bez kopiowania cudzych logo SVG)
- **Misja** + **Usługi** — lista 01–04 z hover (rotacja `+`, lekki indent)
- **Projekty** — siatka 2×2 z placeholderowymi mockupami (telefon + przeglądarka), ciemny card „Dołącz do zadowolonych partnerów"
- **Opinia** Krzysztofa Wnęka
- **Ciemna sekcja kontakt** z podkreślonym „Napisz do nas"
- **FAQ** — działający akordeon (5 pytań)
- **Footer** 4-kolumnowy + newsletter (działa, pokazuje „Zapisano ✓")
- **Gigantyczne `auraflux™`** na dole

Responsywność: <980px stackuje wszystko do 1 kolumny.

Co warto wymienić, gdy będziesz mieć materiały:
- Awatary klientów (3 zdjęcia w hero + 1 w testimonialu) — teraz gradienty
- Logo marek w pasku — placeholdery
- Screenshoty projektów (Abelard Olza, Pozytywna Inteligencja, Ask Spot) — narysowane jako stylizowane mockupy
- Adres/telefon w stopce — wpisałem przykładowe; daj znać, podstawię prawdziwe

## User

"zaufały nam takie marki jak"
zrób miejsca na grafiki

"Podróże od wizji do ożywienia
marki"
zrób miejsca na grafiki

## Assistant

Dobry pomysł — wstawię prawdziwe sloty na grafiki (`image-slot`), na które przeciągniesz własne pliki, i które zapamiętają obraz po odświeżeniu.

_[tool: copy_starter_component]_

_[tool: read_file]_

Teraz podmienię paski marek i kafle projektów na sloty na grafiki, i dodam skrypt komponentu.

_[tool: str_replace_edit]_

Teraz pasek marek — 6 slotów:

_[tool: str_replace_edit]_

Teraz trzy kafle projektów — zamieniam narysowane mockupy na sloty:

_[tool: str_replace_edit]_

Teraz dodaję skrypt komponentu przed `</body>`:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: show_html]_

Hero wygląda dobrze. Sprawdzę sekcje ze slotami:

_[tool: multi_screenshot]_

Sloty działają w obu sekcjach. Gotowe.

Zamieniłem narysowane elementy na prawdziwe miejsca na grafiki:

- **„zaufały nam takie marki jak"** — 6 slotów na logo (tryb `contain`, żeby logotypy nie były przycinane)
- **„Podróże od wizji do ożywienia marki"** — 3 sloty na grafiki projektów (Abelard Olza, Pozytywna Inteligencja, Ask Spot); ciemny kafel „Dołącz do partnerów" zostawiłem bez zmian

Każdy slot wypełnisz przeciągając plik lub klikając „browse files" — obraz zapamięta się po odświeżeniu.

## User

Na podstawie stylu stwórz podstrony
- Branding
- Strony internetowe i UX/UI
- Opieka technologiczna 
- Partnerstwo strategiczne
- Strona case study jako szablon pod każdy projekt.
- Dodaj moduł przed stopką Lead magnet

## Assistant

Świetnie — to większy build. Zaplanuję go i zrobię spójnie z istniejącym stylem. Najpierw przeczytam całość, żeby wyekstrahować wspólny CSS i elementy (nav, stopka, lead magnet) do plików współdzielonych.

_[tool: read_file]_

_[tool: update_todos]_

## User

Działaj

## Assistant

Najpierw wyekstrahuję wspólny CSS do `site.css`, żeby wszystkie podstrony były spójne i łatwe w utrzymaniu. Czytam dokładnie obecny plik.

_[tool: read_file]_

_[tool: read_file]_

Mam pełny obraz. Tworzę architekturę: wspólny `site.css` (cały obecny styl + nowe komponenty dla podstron i lead magnet), a potem 5 podstron i podpięcie lead magnet na stronie głównej. Zaczynam od `site.css`.

_[tool: write_file]_

Teraz refaktoryzuję stronę główną: podmieniam wewnętrzny `<style>` na link do `site.css`, podlinkowuję kafle usług do podstron i wstawiam moduł Lead magnet przed stopką.

_[tool: run_script]_

Skróceniе jest oczekiwane (usuwam ~14 kB CSS). Zapiszę przez write_file z pełną nową treścią — przy okazji dodam lead magnet i linki do podstron.

_[tool: write_file]_

Teraz wspólny `site.js` (akordeon FAQ + płynne przewijanie kotwic):

_[tool: write_file]_

Strona główna gotowa. Teraz buduję 5 podstron. Wszystkie współdzielą `site.css`/`site.js` oraz spójny nav, lead magnet, sekcję kontakt i stopkę. Piszę je równolegle.

_[tool: write_file]_

_[tool: write_file]_

Teraz Opieka technologiczna i Partnerstwo strategiczne:

_[tool: write_file]_

_[tool: write_file]_

Na koniec szablon case study:

_[tool: write_file]_

_[tool: update_todos]_

Wszystko gotowe. Sprawdzę render podstrony i strony głównej z lead magnet.

_[tool: show_html]_

_[tool: show_html]_

Wygląda spójnie ze stroną główną. Sprawdzę lead magnet i pricing oraz case study.

_[tool: multi_screenshot]_

Screenshoty html-to-image renderują od góry — to normalne. Strona renderuje się czysto i spójnie. Oddaję do weryfikacji w tle.

_[tool: done]_

_[tool: fork_verifier_agent]_

Gotowe. Rozbudowałem serwis o pełną strukturę podstron, spójną 1:1 ze stroną główną.

**Co powstało:**

| Strona | Zawartość |
|---|---|
| **Branding** | hero, statystyki, proces 01–04, 6 deliverables, split o strategii, 3 pakiety cenowe |
| **Strony WWW i UX/UI** | hero, statystyki, proces, deliverables, 2 splity (design system + wydajność), 3 pakiety |
| **Opieka technologiczna** | hero, statystyki (uptime/SLA), proces, zakres opieki, split, 3 plany abonamentowe (miesięczne) |
| **Partnerstwo strategiczne** | hero, statystyki, proces, obszary wsparcia, split, 3 modele współpracy |
| **Case Study (szablon)** | breadcrumb, hero z metadanymi, full-bleed grafika, Wyzwanie/Rozwiązanie, 2 galerie, cytat klienta, sekcja efektów, „następny projekt" |

**Architektura:**
- Wspólny `site.css` + `site.js` — jeden punkt zmian dla całego serwisu
- Kafle usług i projektów na stronie głównej są teraz **klikalne** i prowadzą do podstron (projekty → szablon case study)
- **Lead magnet** („Bezpłatny przewodnik — 12 rzeczy…") wstawiony przed stopką na **każdej** stronie, z działającym formularzem i miejscem na okładkę PDF
- Wszystkie grafiki to `image-slot` — przeciągasz pliki, zapamiętują się

**Do uzupełnienia, gdy będziesz mieć materiały:**
- Wyceny w pakietach wpisałem przykładowo (zł) — podmień na realne
- Statystyki (uptime, % konwersji itd.) to wartości poglądowe
- W szablonie case study tekst to placeholdery („Nazwa projektu", „Wyzwanie/Rozwiązanie") — duplikujesz plik pod każdy projekt i podmieniasz treść + grafiki

