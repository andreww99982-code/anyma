/* Anyma Ticket System - Local Booking Engine */
(function () {
  'use strict';

  /* ───────────────────────────────────────────
     EVENT CATALOGUE  (all Anyma shows 2026)
     Prices are in local currency where shown.
  ─────────────────────────────────────────── */
  var EVENTS = {
    /* ── TOUR ── */
    'ibiza': {
      title: '[UNVRS] IBIZA',
      date:  'JUN 9 – SEP 15, 2026',
      endDate: '2026-09-15',
      venue: 'Hï Ibiza, Ibiza, Spain',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Dance floor access',              price: 35,  avail: 500 },
        { id: 'vip', name: 'VIP',               desc: 'VIP area + priority entry',       price: 90,  avail: 80  },
        { id: 'tab', name: 'VIP Table',         desc: 'Reserved table, min. 4 persons', price: 350, avail: 20  }
      ]
    },
    'vancouver': {
      title: 'ANYMA – VANCOUVER',
      date:  'AUG 29, 2026',
      endDate: '2026-08-29',
      venue: 'Soulrise Festival, Vancouver, Canada',
      currency: 'CAD',
      symbol: 'C$',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Festival grounds access',   price: 99,  avail: 1000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP area + lounge access', price: 199, avail: 150  }
      ]
    },
    'istanbul': {
      title: 'ANYMA – ISTANBUL',
      date:  'SEP 12, 2026',
      endDate: '2026-09-12',
      venue: 'Ataköy Marina Arena, Istanbul, Turkey',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',              price: 45,  avail: 2000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP section + dedicated bar', price: 110, avail: 200  }
      ]
    },
    'milan': {
      title: 'ANYMA – MILAN',
      date:  'SEP 19, 2026',
      endDate: '2026-09-19',
      venue: 'Ippodromo SNAI La Maura, Milan, Italy',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',      price: 55,  avail: 2500 },
        { id: 'vip', name: 'VIP',               desc: 'VIP pit + fast lane', price: 120, avail: 300  }
      ]
    },
    'madrid': {
      title: 'ANYMA – MADRID',
      date:  'SEP 26, 2026',
      endDate: '2026-09-26',
      venue: 'Caja Mágica, Madrid, Spain',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',      price: 50,  avail: 3000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP terrace',         price: 100, avail: 250  }
      ]
    },
    'sydney': {
      title: 'ANYMA – SYDNEY',
      date:  'OCT 17, 2026',
      endDate: '2026-10-17',
      venue: 'Domain, Sydney, Australia',
      currency: 'AUD',
      symbol: 'A$',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',           price: 119, avail: 3000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP area + backstage bar', price: 229, avail: 200  }
      ]
    },
    'athens': {
      title: 'ANYMA – ATHENS',
      date:  'OCT 31, 2026',
      endDate: '2026-10-31',
      venue: 'Terra Vibe Park, Athens, Greece',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',   price: 45,  avail: 2500 },
        { id: 'vip', name: 'VIP',               desc: 'VIP section',      price: 95,  avail: 200  }
      ]
    },
    'mumbai': {
      title: 'ANYMA – MUMBAI',
      date:  'NOV 21, 2026',
      endDate: '2026-11-21',
      venue: 'Mahalaxmi Race Course, Mumbai, India',
      currency: 'INR',
      symbol: '₹',
      tiers: [
        { id: 'early',name: 'Early Bird',        desc: 'Limited availability',     price: 1999,  avail: 300  },
        { id: 'ga',   name: 'General Admission', desc: 'Standing floor',           price: 2999,  avail: 2000 },
        { id: 'vip',  name: 'VIP',               desc: 'VIP lounge + premium bar', price: 5999,  avail: 150  }
      ]
    },
    'paris': {
      title: 'ANYMA – PARIS',
      date:  'DEC 12, 2026',
      endDate: '2026-12-12',
      venue: 'Accor Arena, Paris, France',
      currency: 'EUR',
      symbol: '€',
      tiers: [
        { id: 'cat3', name: 'Cat. 3',  desc: 'Upper tier',            price: 55,  avail: 800  },
        { id: 'cat2', name: 'Cat. 2',  desc: 'Mid tier',              price: 75,  avail: 600  },
        { id: 'cat1', name: 'Cat. 1',  desc: 'Floor / lower tier',    price: 95,  avail: 400  },
        { id: 'vip',  name: 'VIP',     desc: 'VIP floor + lounge',    price: 160, avail: 100  }
      ]
    },
    'mexicocity': {
      title: 'ANYMA – MEXICO CITY',
      date:  'AUG 22, 2026',
      endDate: '2026-08-22',
      venue: 'Foro Sol, Mexico City, Mexico',
      currency: 'MXN',
      symbol: 'MX$',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',    price: 1200, avail: 3000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP pit',           price: 2500, avail: 200  }
      ]
    },
    'chicago': {
      title: 'ANYMA – CHICAGO',
      date:  'SEP 6, 2026',
      endDate: '2026-09-06',
      venue: 'ARC Music Festival, Chicago, IL',
      currency: 'USD',
      symbol: '$',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Festival grounds access', price: 120, avail: 2000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP viewing area',        price: 260, avail: 200  }
      ]
    },
    /* ── SPHERE LAS VEGAS ── */
    'sphere': {
      title: 'ANYMA AT THE SPHERE',
      date:  'DEC 31, 2025 – JAN 1, 2026 & residency',
      endDate: '2026-12-31',
      venue: 'The Sphere, Las Vegas, NV',
      currency: 'USD',
      symbol: '$',
      tiers: [
        { id: 'upper',  name: 'Upper Bowl',   desc: 'Full sphere 360° view',        price: 150, avail: 500  },
        { id: 'main',   name: 'Main Floor',   desc: 'Main floor standing',          price: 250, avail: 800  },
        { id: 'floor',  name: 'Floor GA',     desc: 'Close-proximity dance floor',  price: 350, avail: 300  },
        { id: 'vip',    name: 'VIP',          desc: 'VIP lounge + premium viewing', price: 600, avail: 100  }
      ]
    },
    /* ── MAIN PAGE events ── */
    'london': {
      title: 'ANYMA – LONDON',
      date:  'JUN 27 + 28, 2026',
      endDate: '2026-06-28',
      venue: 'Finsbury Park, London, UK',
      currency: 'GBP',
      symbol: '£',
      tiers: [
        { id: 'ga',  name: 'General Admission', desc: 'Standing floor',   price: 65,  avail: 4000 },
        { id: 'vip', name: 'VIP',               desc: 'VIP area',         price: 130, avail: 300  }
      ]
    },
    'gdansk': {
      title: 'ANYMA – GDAŃSK',
      date:  'AUG 7 + 8, 2026',
      endDate: '2026-08-08',
      venue: 'Gdańsk Open Air, Gdańsk, Poland',
      currency: 'PLN',
      symbol: 'zł',
      tiers: [
        { id: 'ga',   name: 'General Admission', desc: 'Standing floor',  price: 199, avail: 2000 },
        { id: 'vip',  name: 'VIP',               desc: 'VIP section',     price: 399, avail: 200  }
      ]
    }
  };

  /* ── State ── */
  var currentEvent = null;
  var qty = {};
  var visitorDetails = [];

  function pruneExpiredEvents() {
    var now = new Date();
    Object.keys(EVENTS).forEach(function (id) {
      var event = EVENTS[id];
      if (!event || !event.endDate) return;
      var endDate = new Date(event.endDate + 'T23:59:59');
      if (isNaN(endDate.getTime())) return;
      if (endDate < now) delete EVENTS[id];
    });
  }

  pruneExpiredEvents();

  /* ── Build modal HTML once ── */
  function buildModal() {
    if (document.getElementById('anyma-ticket-overlay')) return;

    var overlay = document.createElement('div');
    overlay.id = 'anyma-ticket-overlay';
    overlay.innerHTML =
      '<div id="anyma-ticket-modal" role="dialog" aria-modal="true" aria-labelledby="atm-title">' +
        '<button id="anyma-ticket-close" aria-label="Close">&times;</button>' +
        '<p class="atm-event-label">Anyma Presents</p>' +
        '<h2 class="atm-event-title" id="atm-title"></h2>' +
        '<p class="atm-event-meta"></p>' +
        '<div class="atm-divider"></div>' +
        '<p class="atm-section-label">Select tickets</p>' +
        '<div id="atm-tiers"></div>' +
        '<div class="atm-divider"></div>' +
        '<div id="atm-visitors-wrap" hidden>' +
          '<p class="atm-section-label">Visitor details</p>' +
          '<div id="atm-visitors"></div>' +
        '</div>' +
        '<div class="atm-divider" id="atm-visitors-divider" hidden></div>' +
        '<div class="atm-summary">' +
          '<p class="atm-summary-label">Total</p>' +
          '<p class="atm-total-amount" id="atm-total">—</p>' +
          '<button class="atm-buy-btn" id="atm-buy-btn" disabled>Proceed to Payment</button>' +
        '</div>' +
        '<p class="atm-note">Secure payment · Instant confirmation · No hidden fees</p>' +
      '</div>';

    document.body.appendChild(overlay);

    /* Close handlers */
    document.getElementById('anyma-ticket-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    document.getElementById('atm-buy-btn').addEventListener('click', handlePayment);
    document.getElementById('atm-visitors').addEventListener('input', handleVisitorInput);
  }

  /* ── Open modal for a given event ID ── */
  function openTicketModal(eventId) {
    buildModal();
    currentEvent = EVENTS[eventId] || null;
    if (!currentEvent) { console.warn('Ticket system: unknown event', eventId); return; }

    qty = {};
    visitorDetails = [];
    currentEvent.tiers.forEach(function (t) { qty[t.id] = 0; });

    /* Populate header */
    document.querySelector('#anyma-ticket-modal .atm-event-title').textContent = currentEvent.title;
    document.querySelector('#anyma-ticket-modal .atm-event-meta').textContent =
      currentEvent.date + ' · ' + currentEvent.venue;

    /* Populate tiers */
    var tiersEl = document.getElementById('atm-tiers');
    tiersEl.innerHTML = '';
    currentEvent.tiers.forEach(function (tier) {
      var div = document.createElement('div');
      div.className = 'atm-tier';
      div.innerHTML =
        '<div class="atm-tier-info">' +
          '<p class="atm-tier-name">' + escHtml(tier.name) + '</p>' +
          '<p class="atm-tier-desc">' + escHtml(tier.desc) + '</p>' +
        '</div>' +
        '<p class="atm-tier-price">' + currentEvent.symbol + formatNum(tier.price) + '</p>' +
        '<div class="atm-tier-qty">' +
          '<button class="atm-qty-btn" data-tier="' + tier.id + '" data-action="minus" aria-label="Decrease">−</button>' +
          '<span class="atm-qty-val" id="qty-' + tier.id + '">0</span>' +
          '<button class="atm-qty-btn" data-tier="' + tier.id + '" data-action="plus" aria-label="Increase">+</button>' +
        '</div>';
      tiersEl.appendChild(div);
    });

    /* Remove any prior listener before adding a fresh one */
    var freshTiers = tiersEl.cloneNode(false);
    while (tiersEl.firstChild) freshTiers.appendChild(tiersEl.firstChild);
    tiersEl.parentNode.replaceChild(freshTiers, tiersEl);
    freshTiers.addEventListener('click', handleQtyClick);

    updateSummary();

    var overlay = document.getElementById('anyma-ticket-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var overlay = document.getElementById('anyma-ticket-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentEvent = null;
  }

  function handleQtyClick(e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var tierId = btn.getAttribute('data-tier');
    var action = btn.getAttribute('data-action');
    var tier = currentEvent.tiers.find(function (t) { return t.id === tierId; });
    if (!tier) return;

    if (action === 'plus') {
      if (qty[tierId] < Math.min(10, tier.avail)) qty[tierId]++;
    } else {
      if (qty[tierId] > 0) qty[tierId]--;
    }
    document.getElementById('qty-' + tierId).textContent = qty[tierId];
    updateSummary();
  }

  function updateSummary() {
    if (!currentEvent) return;
    var total = 0;
    var totalTickets = 0;
    currentEvent.tiers.forEach(function (t) {
      var tierQty = qty[t.id] || 0;
      total += t.price * tierQty;
      totalTickets += tierQty;
    });
    var totalEl = document.getElementById('atm-total');
    var buyBtn  = document.getElementById('atm-buy-btn');

    if (total > 0) {
      totalEl.textContent = currentEvent.symbol + formatNum(total);
      buyBtn.disabled = false;
    } else {
      totalEl.textContent = '—';
      buyBtn.disabled = true;
    }
    syncVisitorFields(totalTickets);
  }

  function handlePayment() {
    if (!currentEvent) return;
    var total = 0;
    currentEvent.tiers.forEach(function (t) {
      total += t.price * (qty[t.id] || 0);
    });
    if (total <= 0) return;
    if (!validateVisitors()) return;
    var paymentUrl = getPaymentUrl();
    if (!paymentUrl) {
      window.alert('Payment system URL is not configured.');
      return;
    }
    var separator = paymentUrl.indexOf('?') === -1 ? '?' : '&';
    var nextUrl =
      paymentUrl +
      separator +
      'amount=' + encodeURIComponent(total) +
      '&currency=' + encodeURIComponent(currentEvent.currency);
    closeModal();
    window.location.href = nextUrl;
  }

  function handleVisitorInput(e) {
    var input = e.target.closest('[data-visitor-index][data-field]');
    if (!input) return;
    var index = parseInt(input.getAttribute('data-visitor-index'), 10);
    var field = input.getAttribute('data-field');
    if (isNaN(index) || (field !== 'firstName' && field !== 'lastName')) return;
    if (!visitorDetails[index]) visitorDetails[index] = { firstName: '', lastName: '' };
    visitorDetails[index][field] = input.value || '';
  }

  function syncVisitorFields(totalTickets) {
    var wrap = document.getElementById('atm-visitors-wrap');
    var divider = document.getElementById('atm-visitors-divider');
    var container = document.getElementById('atm-visitors');
    if (!wrap || !divider || !container) return;

    if (totalTickets <= 0) {
      visitorDetails = [];
      container.innerHTML = '';
      wrap.hidden = true;
      divider.hidden = true;
      return;
    }

    while (visitorDetails.length < totalTickets) visitorDetails.push({ firstName: '', lastName: '' });
    if (visitorDetails.length > totalTickets) visitorDetails = visitorDetails.slice(0, totalTickets);

    container.innerHTML = visitorDetails.map(function (visitor, index) {
      var first = visitor && visitor.firstName ? escHtml(visitor.firstName) : '';
      var last = visitor && visitor.lastName ? escHtml(visitor.lastName) : '';
      var number = index + 1;
      return (
        '<div class="atm-visitor-row">' +
          '<p class="atm-visitor-label">Visitor ' + number + '</p>' +
          '<div class="atm-visitor-fields">' +
            '<input class="atm-visitor-input" type="text" placeholder="First name" autocomplete="given-name" data-visitor-index="' + index + '" data-field="firstName" value="' + first + '">' +
            '<input class="atm-visitor-input" type="text" placeholder="Last name" autocomplete="family-name" data-visitor-index="' + index + '" data-field="lastName" value="' + last + '">' +
          '</div>' +
        '</div>'
      );
    }).join('');

    wrap.hidden = false;
    divider.hidden = false;
  }

  function validateVisitors() {
    var totalTickets = 0;
    currentEvent.tiers.forEach(function (t) {
      totalTickets += qty[t.id] || 0;
    });
    if (totalTickets <= 0) return true;

    for (var i = 0; i < totalTickets; i++) {
      var visitor = visitorDetails[i] || {};
      var first = (visitor.firstName || '').trim();
      var last = (visitor.lastName || '').trim();
      if (!first || !last) {
        window.alert('Please fill in first and last name for each visitor.');
        var missingInput = document.querySelector('[data-visitor-index="' + i + '"][data-field="' + (!first ? 'firstName' : 'lastName') + '"]');
        if (missingInput) missingInput.focus();
        return false;
      }
      visitorDetails[i] = { firstName: first, lastName: last };
    }

    return true;
  }

  function getPaymentUrl() {
    var cfg = window.AnymaTicketConfig || {};
    if (typeof cfg.paymentUrl === 'string') {
      var url = cfg.paymentUrl.trim();
      if (url) return url;
    }
    return null;
  }

  /* ── Helpers ── */
  function formatNum(n) {
    return n.toLocaleString('en-US');
  }

  function escHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ── Expose globally ── */
  window.openTicketModal = openTicketModal;

  /* ── Global intercept: catch any residual external ticket links ── */
  var LINK_MAP = {
    'unvrs.com':              'ibiza',
    'tixr.com':               'vancouver',
    'passo.com.tr':           'istanbul',
    'ticketone.it':           'milan',
    'enterticket':            'madrid',
    'untld.group':            'sydney',
    'more.com/gr-en':         'athens',
    'bookmyshow.com':         'mumbai',
    'livenation.fr':          'paris',
    'ticketmaster.com.mx':    'mexicocity',
    'ticketmaster.com/anyma': 'sphere',
    'kaboodle.co.uk':         'london',
    'weeztix':                'gdansk'
  };

  var BANDSINTOWN_EVENT_MAP = {
    '108468733': 'vancouver',
    '107991644': 'ibiza',
    '107991651': 'ibiza',
    '107991658': 'ibiza',
    '107947882': 'istanbul',
    '107947885': 'milan',
    '108502486': 'madrid',
    '107947880': 'sydney',
    '108769331': 'athens',
    '107947889': 'mumbai',
    '107947888': 'paris',
    '108108296': 'chicago'
  };

  function resolveEventIdFromBandsintownLink(link, href) {
    var idMatch = href.match(/bandsintown\.com\/(?:e|t)\/(\d+)/);
    if (idMatch && BANDSINTOWN_EVENT_MAP[idMatch[1]]) return BANDSINTOWN_EVENT_MAP[idMatch[1]];

    var parentEvent = link.closest('.bit-event');
    if (!parentEvent) return null;
    var eventText = (parentEvent.textContent || '').toLowerCase();
    var fallbacks = [
      { id: 'vancouver', keys: ['vancouver', 'soulrise'] },
      { id: 'ibiza', keys: ['ibiza', 'sant rafel', 'unvrs', 'æden'] },
      { id: 'istanbul', keys: ['istanbul', 'bakırköy'] },
      { id: 'milan', keys: ['milan', 'rho'] },
      { id: 'madrid', keys: ['madrid', 'arganda'] },
      { id: 'sydney', keys: ['sydney'] },
      { id: 'athens', keys: ['athens', 'athina'] },
      { id: 'mumbai', keys: ['mumbai'] },
      { id: 'paris', keys: ['paris', 'nanterre'] },
      { id: 'chicago', keys: ['chicago', 'arc music festival'] }
    ];
    for (var i = 0; i < fallbacks.length; i++) {
      var option = fallbacks[i];
      for (var j = 0; j < option.keys.length; j++) {
        if (eventText.indexOf(option.keys[j]) !== -1) return option.id;
      }
    }
    return null;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var btnText = (link.textContent || '').trim().toUpperCase();
    if (btnText === 'SOLD OUT') return;

    if (href.indexOf('bandsintown.com') !== -1) {
      var internalEventId = resolveEventIdFromBandsintownLink(link, href);
      e.preventDefault();
      e.stopPropagation();
      if (internalEventId && EVENTS[internalEventId]) {
        openTicketModal(internalEventId);
      } else {
        window.alert('Tickets for this event are not available yet.');
      }
      return;
    }

    for (var key in LINK_MAP) {
      if (href.indexOf(key) !== -1) {
        e.preventDefault();
        e.stopPropagation();
        openTicketModal(LINK_MAP[key]);
        return;
      }
    }
  }, true);

})();
