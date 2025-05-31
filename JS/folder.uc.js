// ==UserScript==
// @ignorecache
// @name          folder
// @description   Adjusts the height of #browser::before to match .urlbarView height.
// @include       chrome://browser/content/browser.xhtml
// @run-at        document-idle
// ==/UserScript==
// (Note: The above header is for userscript managers, may not be needed for autoconfig)


(function () {
  if (window.Folder) {
    window.Folder.destroy();
  }

  window.Folder = {
    FOLDER_SVG: `
    <svg width="30px" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="-67.409 -14.145 29.279 28.92">
    <defs>
    <linearGradient gradientUnits="userSpaceOnUse" x1="-53.05" y1="-3.8" x2="-53.05" y2="8.998" id="gradient-1">
    <stop offset="0" style="stop-color: rgb(255, 255, 255);"/>
    <stop offset="1" style="stop-color: rgb(0% 0% 0%)"/>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="-40.286" y1="-3.091" x2="-40.286" y2="13.31" id="gradient-0" gradientTransform="matrix(1, 0, 0, 1, -12.717999, -4.409)">
    <stop offset="0" style="stop-color: rgb(255, 255, 255);"/>
    <stop offset="1" style="stop-color: rgb(0% 0% 0%)"/>
    </linearGradient>
    </defs>
    <path d="M -61.3 -5.25 C -61.3 -6.492 -60.293 -7.5 -59.05 -7.5 L -55.102 -7.5 C -54.591 -7.5 -54.096 -7.326 -53.697 -7.007 L -52.84 -6.321 C -52.175 -5.79 -51.349 -5.5 -50.498 -5.5 L -47.05 -5.5 C -45.807 -5.5 -44.8 -4.492 -44.8 -3.25 L -44.731 4.42 L -44.708 6.651 C -44.708 7.894 -45.715 8.901 -46.958 8.901 L -58.958 8.901 C -60.201 8.901 -61.208 7.894 -61.208 6.651 L -61.3 4.752 L -61.3 -5.25 Z" style="stroke-width: 1.25px; transform-box: fill-box; transform-origin: 50% 50%; fill: var(--zen-workspace-color-bg); stroke: var(--zen-workspace-color-stroke);">
    <animateTransform type="skewX" additive="sum" attributeName="transform" values="0;17" dur="0.4s" fill="freeze" keyTimes="0; 1" end="0.6s" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;-0.4 -0.2" dur="0.4s" keyTimes="0; 1" fill="freeze" end="0.6s" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="scale" additive="sum" attributeName="transform" values="1 1;0.9 0.9" begin="0s" dur="0.4s" fill="freeze" keyTimes="0; 1" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    </path>
    <path d="M -61.3 -5.25 C -61.3 -6.492 -60.293 -7.5 -59.05 -7.5 L -55.102 -7.5 C -54.591 -7.5 -54.096 -7.326 -53.697 -7.007 L -52.84 -6.321 C -52.175 -5.79 -51.349 -5.5 -50.498 -5.5 L -47.05 -5.5 C -45.807 -5.5 -44.8 -4.492 -44.8 -3.25 L -44.731 4.42 L -44.708 6.651 C -44.708 7.894 -45.715 8.901 -46.958 8.901 L -58.958 8.901 C -60.201 8.901 -61.208 7.894 -61.208 6.651 L -61.3 4.752 L -61.3 -5.25 Z" style="stroke-width: 1.25; fill-opacity: 0.15; fill: url(&quot;#gradient-0&quot;); transform-origin: -53.004px 0.701px;">
    <animateTransform type="skewX" additive="sum" attributeName="transform" values="0;17" dur="0.4s" fill="freeze" keyTimes="0; 1" end="0.6s" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;-0.4 -0.2" dur="0.4s" keyTimes="0; 1" fill="freeze" end="0.6s" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="scale" additive="sum" attributeName="transform" values="1 1;0.9 0.9" begin="0s" dur="0.4s" fill="freeze" keyTimes="0; 1" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    </path>
    <rect x="-61.301" y="-3.768" width="16.5" height="12.798" rx="2.25" style="stroke-width: 1.25px; transform-box: fill-box; transform-origin: 50% 50%; fill: var(--zen-workspace-color-fg); stroke: var(--zen-workspace-color-stroke);" id="object-0">
    <animateTransform type="skewX" additive="sum" attributeName="transform" values="0;-17" dur="0.4s" keyTimes="0; 1" max="0.6s" fill="freeze" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;3 -0.5" dur="0.4s" fill="freeze" keyTimes="0; 1" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="scale" additive="sum" attributeName="transform" values="1 1;0.9 0.9" begin="0s" dur="0.4s" fill="freeze" keyTimes="0; 1" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    </rect>
    <rect x="-61.3" y="-3.8" width="16.5" height="12.798" style="stroke-width: 1.25; fill-opacity: 0.15; transform-origin: -53.05px 2.599px; fill: url(&quot;#gradient-1&quot;);" id="rect-1" rx="2.25">
    <animateTransform type="skewX" additive="sum" attributeName="transform" values="0;-17" dur="0.4s" keyTimes="0; 1" max="0.6s" fill="freeze" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;3 -0.5" dur="0.4s" fill="freeze" keyTimes="0; 1" max="0.6s" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    <animateTransform type="scale" additive="sum" attributeName="transform" values="1 1;0.9 0.9" dur="0.4s" fill="freeze" keyTimes="0; 1" calcMode="spline" keySplines="0.42 0 0.58 1"/>
    </rect>
    </svg>
    `,
    ANIMATION_DURATION: 0.4,
    parser: new DOMParser(),
    mainObserver: null,
    processedTabGroups: new WeakSet(),
    hoverPreviewState: new WeakMap(),

    init: function () {
      document
        .querySelectorAll("tab-group:not([split-view-group])")
        .forEach((tg) => this.processTabGroup(tg));
      this.mainObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.matches("tab-group:not([split-view-group])")) this.processTabGroup(node);
              node
                .querySelectorAll("tab-group:not([split-view-group])")
                .forEach((tg) => this.processTabGroup(tg));
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.matches("tab-group:not([split-view-group])")
            ) {
              this._cleanupTabGroupState(node);
            }
          });
        });
      });
      const targetNode = document.getElementById("TabsToolbar");
      if (targetNode) {
        this.mainObserver.observe(targetNode, {
          childList: true,
          subtree: true,
        });
      } else {
        console.warn("[Folder]: TabsToolbar not found.");
      }
      console.log("[Folder]: Initialized");
    },

    processTabGroup: function (tabGroup) {
      if (!tabGroup || this.processedTabGroups.has(tabGroup)) return;
      const labelContainer = tabGroup.querySelector(
        ".tab-group-label-container",
      );
      if (!labelContainer) return;

      let iconContainer = labelContainer.querySelector(
        ".tab-group-custom-icon",
      );
      if (!iconContainer) {
        iconContainer = document.createElement("div");
        iconContainer.className = "tab-group-custom-icon";
        Object.assign(iconContainer.style, {
          width: "30px",
          height: "30px",
          marginRight: "4px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          visibility: "hidden",
        });
        labelContainer.insertBefore(iconContainer, labelContainer.firstChild);
      }
      this.updateIcon(tabGroup, iconContainer, false);

      const attributeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "collapsed") {
            this.updateIcon(mutation.target, iconContainer, true);
            const state = this.hoverPreviewState.get(tabGroup);
            if (
              tabGroup.collapsed &&
              state &&
              (state.isFixedByActiveTab || state.isPreviewActive)
            ) {
              this._cleanupTabGroupState(tabGroup);
            }
          }
        });
      });
      attributeObserver.observe(tabGroup, {
        attributes: true,
        attributeFilter: ["collapsed"],
      });
      tabGroup._tabGroupIconAttributeObserver = attributeObserver;

      if (Services.prefs.getBoolPref("animated-folder.preview.enabled", true)) {
        tabGroup._handleMouseEnter = this._handleTabGroupMouseEnter.bind(this);
        tabGroup._handleMouseLeave = this._handleTabGroupMouseLeave.bind(this);
        tabGroup.addEventListener("mouseenter", tabGroup._handleMouseEnter);
        tabGroup.addEventListener("mouseleave", tabGroup._handleMouseLeave);
      }

      const tabLabel = tabGroup.querySelector(".tab-group-label");
      if (tabLabel) {
        tabLabel._handleClick = this._handleTabGroupLabelClick.bind(this);
        tabLabel.addEventListener("click", tabLabel._handleClick, true);
      }
      this.processedTabGroups.add(tabGroup);
    },

    _hasActiveOrSelectedTabInGroup: function (tabGroup) {
      if (!tabGroup || !tabGroup.isConnected) return false;
      return Array.from(tabGroup.querySelectorAll("tab")).some((tab) =>
        tab.matches("[selected], [visuallyselected], [multiselected]"),
      );
    },

    _hasNonPendingTabsInGroup: function (tabGroup) {
      if (!tabGroup || !tabGroup.isConnected) return false;
      const allTabs = Array.from(tabGroup.querySelectorAll("tab"));
      if (allTabs.length === 0) return false;
      return allTabs.some((tab) => !tab.hasAttribute("pending"));
    },

    _cleanupTabGroupState: function (tabGroup, keepGroupOpen = false) {
      const state = this.hoverPreviewState.get(tabGroup);
      if (state) {
        if (state.tabAttributeObserver) {
          state.tabAttributeObserver.disconnect();
          state.tabAttributeObserver = null;
        }
        if (state.hiddenTabs) {
          state.hiddenTabs.forEach((tab) => {
            if (tab.isConnected) {
              tab.style.display = "";
            }
          });
          state.hiddenTabs = [];
        }

        const shouldCollapse = !keepGroupOpen && state.originalCollapsed;
        this.hoverPreviewState.delete(tabGroup);

        if (shouldCollapse && tabGroup.isConnected && !tabGroup.collapsed) {
          tabGroup.collapsed = true;
        }
      }
      if (!tabGroup.isConnected) {
        this.processedTabGroups.delete(tabGroup);
      }
    },

    _resetAndPotentiallyCollapseGroup: function (tabGroup, state) {
      if (!state) return;
      this._cleanupTabGroupState(tabGroup, false);
    },

    _updateVisibilityForFixedGroup: function (tabGroup, state) {
      if (!tabGroup || !state || !state.isFixedByActiveTab) return;
      const newlyHiddenInThisStep = [];
      Array.from(tabGroup.querySelectorAll("tab")).forEach((tab) => {
        const isSelectedByUser = tab.matches(
          "[selected], [visuallyselected], [multiselected]",
        );
        if (tab.hasAttribute("pending") || !isSelectedByUser) {
          if (tab.style.display !== "none") {
            tab.style.setProperty("display", "none", "important");
          }
          newlyHiddenInThisStep.push(tab);
        } else {
          if (tab.style.display === "none") {
            tab.style.display = "";
          }
        }
      });
      state.hiddenTabs = newlyHiddenInThisStep;
    },

    _handleTabGroupMouseEnter: function (event) {
      const tabGroup = event.currentTarget;
      let state = this.hoverPreviewState.get(tabGroup);
      let reInitializeHover = false;
      let previousOriginalCollapsedState = tabGroup.collapsed;

      if (state) {
        if (state.isFixedByActiveTab) {
          if (!this._hasActiveOrSelectedTabInGroup(tabGroup)) {
            previousOriginalCollapsedState = state.originalCollapsed;
            this._cleanupTabGroupState(tabGroup, true);
            state = null;
            reInitializeHover = true;
          } else {
            return;
          }
        } else if (state.isPreviewActive) {
          previousOriginalCollapsedState = state.originalCollapsed;
          this._cleanupTabGroupState(tabGroup, true);
          state = null;
          reInitializeHover = true;
        }
      }

      if (!state || reInitializeHover) {
        if (
          !tabGroup.collapsed &&
          !reInitializeHover &&
          !previousOriginalCollapsedState
        ) {
          return;
        }
        if (tabGroup.collapsed && !reInitializeHover) {
          if (!this._hasNonPendingTabsInGroup(tabGroup)) {
            return;
          }
        }

        const currentOriginalCollapsed = reInitializeHover
          ? previousOriginalCollapsedState
          : tabGroup.collapsed;
        const hiddenTabsOnEnter = [];
        Array.from(tabGroup.querySelectorAll("tab")).forEach((tab) => {
          if (tab.hasAttribute("pending")) {
            if (tab.style.display !== "none") {
              tab.style.setProperty("display", "none", "important");
            }
            hiddenTabsOnEnter.push(tab);
          } else {
            if (tab.style.display === "none") {
              tab.style.display = "";
            }
          }
        });

        const newState = {
          originalCollapsed: currentOriginalCollapsed,
          hiddenTabs: hiddenTabsOnEnter,
          isPreviewActive: true,
          isFixedByActiveTab: false,
          tabAttributeObserver: null,
        };
        this.hoverPreviewState.set(tabGroup, newState);
        if (tabGroup.collapsed) {
          tabGroup.collapsed = false;
        }
      }
    },

    _handleTabGroupMouseLeave: function (event) {
      const tabGroup = event.currentTarget;
      const state = this.hoverPreviewState.get(tabGroup);
      if (!state || !state.isPreviewActive) {
        return;
      }

      if (this._hasActiveOrSelectedTabInGroup(tabGroup)) {
        state.isPreviewActive = false;
        state.isFixedByActiveTab = true;
        this._updateVisibilityForFixedGroup(tabGroup, state);
        if (!state.tabAttributeObserver) {
          const tabObserver = new MutationObserver(() => {
            const currentState = this.hoverPreviewState.get(tabGroup);
            if (
              !currentState ||
              !currentState.isFixedByActiveTab ||
              currentState.tabAttributeObserver !== tabObserver
            ) {
              if (tabObserver && typeof tabObserver.disconnect === "function")
                tabObserver.disconnect();
              return;
            }
            if (!this._hasActiveOrSelectedTabInGroup(tabGroup)) {
              this._resetAndPotentiallyCollapseGroup(tabGroup, currentState);
            } else {
              this._updateVisibilityForFixedGroup(tabGroup, currentState);
            }
          });
          Array.from(tabGroup.querySelectorAll("tab")).forEach((tab) => {
            tabObserver.observe(tab, {
              attributes: true,
              attributeFilter: [
                "selected",
                "visuallyselected",
                "multiselected",
                "pending",
              ],
            });
          });
          state.tabAttributeObserver = tabObserver;
        }
      } else {
        this._resetAndPotentiallyCollapseGroup(tabGroup, state);
      }
    },

    _handleTabGroupLabelClick: function (event) {
      const label = event.currentTarget;
      const tabGroup = label.closest("tab-group:not([split-view-group])");
      const state = this.hoverPreviewState.get(tabGroup);
      const hasActiveSelectedTab =
        this._hasActiveOrSelectedTabInGroup(tabGroup);

      if (!tabGroup.collapsed && hasActiveSelectedTab) {
        event.stopImmediatePropagation();
        event.preventDefault();
        if (state) {
          this._cleanupTabGroupState(tabGroup, true);
        }
        return;
      }
      if (state) {
        event.stopImmediatePropagation();
        event.preventDefault();
        const currentCollapsedStateBeforeClick = tabGroup.collapsed;
        this._cleanupTabGroupState(tabGroup, currentCollapsedStateBeforeClick);
        tabGroup.collapsed = currentCollapsedStateBeforeClick;
      }
    },

    updateIcon: function (tabGroup, iconContainer, playAnimation) {
      if (!tabGroup || !iconContainer) return;
      const targetIsCollapsed = tabGroup.collapsed;
      const prevVisualIsCollapsed =
        iconContainer.dataset.iconIsCollapsed === "true";
      const actuallyAnimate =
        playAnimation && prevVisualIsCollapsed !== targetIsCollapsed;
      const svgDoc = this.parser.parseFromString(
        this.FOLDER_SVG,
        "image/svg+xml",
      );
      const svgElement = svgDoc.documentElement;
      svgElement.setAttribute("width", "100%");
      svgElement.setAttribute("height", "100%");
      if (actuallyAnimate) {
        if (targetIsCollapsed) {
          svgElement
            .querySelectorAll("animate, animateTransform, animateMotion")
            .forEach((anim) => {
              const v = anim.getAttribute("values");
              if (v) {
                const o = v.split(";");
                if (o.length === 2)
                  anim.setAttribute("values", `${o[1]};${o[0]}`);
              }
            });
        }
      }
      iconContainer.style.visibility = "hidden";
      iconContainer.innerHTML = "";
      iconContainer.appendChild(svgElement);
      if (!actuallyAnimate) {
        svgElement.pauseAnimations();
        svgElement.setCurrentTime(
          targetIsCollapsed ? 0 : this.ANIMATION_DURATION,
        );
      }
      requestAnimationFrame(() => {
        if (iconContainer.isConnected)
          iconContainer.style.visibility = "visible";
      });
      iconContainer.dataset.iconIsCollapsed = String(targetIsCollapsed);
    },

    destroy: function () {
      console.log("[Folder]: Destroying Animated Icon...");
      if (this.mainObserver) {
        this.mainObserver.disconnect();
        this.mainObserver = null;
      }
      document.querySelectorAll("tab-group:not([split-view-group])").forEach((tabGroup) => {
        if (tabGroup._tabGroupIconAttributeObserver) {
          tabGroup._tabGroupIconAttributeObserver.disconnect();
          delete tabGroup._tabGroupIconAttributeObserver;
        }
        const lc = tabGroup.querySelector(".tab-group-label-container");
        if (lc) {
          const i = lc.querySelector(".tab-group-custom-icon");
          if (i) i.remove();
        }
        if (tabGroup._handleMouseEnter) {
          tabGroup.removeEventListener(
            "mouseenter",
            tabGroup._handleMouseEnter,
          );
          delete tabGroup._handleMouseEnter;
        }
        if (tabGroup._handleMouseLeave) {
          tabGroup.removeEventListener(
            "mouseleave",
            tabGroup._handleMouseLeave,
          );
          delete tabGroup._handleMouseLeave;
        }
        const tl = tabGroup.querySelector(".tab-group-label");
        if (tl && tl._handleClick) {
          tl.removeEventListener("click", tl._handleClick, true);
          delete tl._handleClick;
        }
        this._cleanupTabGroupState(tabGroup);
      });
      this.processedTabGroups = new WeakSet();
      this.hoverPreviewState = new WeakMap();
      delete window.Folder;
      console.log("[Folder]: Icon destroyed.");
    },
  };

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    window.Folder.init();
  } else {
    window.addEventListener(
      "DOMContentLoaded",
      function onLoad() {
        window.removeEventListener("DOMContentLoaded", onLoad, false);
        window.Folder.init();
      },
      false,
    );
  }
})();